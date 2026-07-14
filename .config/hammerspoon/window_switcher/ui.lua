local candidates = require("window_switcher.candidates")

local M = {}

local canvas = nil
local switcherActive = false
local candidateList = {}
local selectedIndex = 1
local iconCache = {} -- bundleID -> hs.image (or false if unavailable)

local function iconForWindow(win)
  local app = win:application()
  local bundleID = app and app:bundleID()
  if not bundleID then return nil end
  local cached = iconCache[bundleID]
  if cached == nil then
    cached = hs.image.imageFromAppBundle(bundleID) or false
    iconCache[bundleID] = cached
  end
  if cached then return cached end
  return nil
end

-- Which slice of candidateList fits on screen, kept centered on the
-- selection rather than always starting from index 1.
local function visibleSlice(maxVisible)
  local n = #candidateList
  local visible = math.min(maxVisible, n)
  if visible == 0 then return 1, 0 end
  local half = math.floor(visible / 2)
  local startIdx = math.max(1, selectedIndex - half)
  local endIdx = math.min(n, startIdx + visible - 1)
  startIdx = math.max(1, endIdx - visible + 1)
  return startIdx, endIdx
end

local function computeCanvasSize(cfg, visibleCount)
  local w = visibleCount * cfg.iconSize + math.max(0, visibleCount - 1) * cfg.itemSpacing + cfg.padding * 2
  local h = cfg.iconSize + cfg.padding * 2 + 44 -- + caption area
  return w, h
end

local function renderCanvas(cfg)
  if not canvas then return end
  local startIdx, endIdx = visibleSlice(cfg.maxVisible)
  local count = endIdx - startIdx + 1
  if count <= 0 then return end

  local sz = canvas:size()
  local w, h = sz.w, sz.h

  local elements = {
    {
      type = "rectangle",
      action = "fill",
      fillColor = { red = 0.11, green = 0.11, blue = 0.12, alpha = 0.96 },
      roundedRectRadii = { xRadius = 16, yRadius = 16 },
      frame = { x = 0, y = 0, w = w, h = h },
    },
  }

  local rowY = cfg.padding
  local totalIconsWidth = count * cfg.iconSize + (count - 1) * cfg.itemSpacing
  local startX = (w - totalIconsWidth) / 2

  for i = startIdx, endIdx do
    local win = candidateList[i]
    local col = i - startIdx
    local x = startX + col * (cfg.iconSize + cfg.itemSpacing)
    local isSelected = (i == selectedIndex)

    if isSelected then
      local hp = 10
      elements[#elements + 1] = {
        type = "rectangle",
        action = "fill",
        fillColor = { red = 0.20, green = 0.42, blue = 0.95, alpha = 0.85 },
        roundedRectRadii = { xRadius = 14, yRadius = 14 },
        frame = { x = x - hp / 2, y = rowY - hp / 2, w = cfg.iconSize + hp, h = cfg.iconSize + hp },
      }
    end

    local img = iconForWindow(win)
    if img then
      elements[#elements + 1] = {
        type = "image",
        image = img,
        frame = { x = x, y = rowY, w = cfg.iconSize, h = cfg.iconSize },
      }
    else
      -- Fallback for apps whose icon couldn't be loaded: a plain badge with
      -- the app's initial, so the row never has a blank gap.
      local app = win:application()
      local name = (app and app:name()) or "?"
      elements[#elements + 1] = {
        type = "rectangle",
        action = "fill",
        fillColor = { red = 0.3, green = 0.3, blue = 0.32, alpha = 1 },
        roundedRectRadii = { xRadius = cfg.iconSize / 2, yRadius = cfg.iconSize / 2 },
        frame = { x = x, y = rowY, w = cfg.iconSize, h = cfg.iconSize },
      }
      elements[#elements + 1] = {
        type = "text",
        text = name:sub(1, 1):upper(),
        textFont = ".AppleSystemUIFontBold",
        textSize = cfg.iconSize * 0.4,
        textColor = { white = 1, alpha = 1 },
        textAlignment = "center",
        frame = { x = x, y = rowY + cfg.iconSize * 0.22, w = cfg.iconSize, h = cfg.iconSize * 0.6 },
      }
    end
  end

  local selWin = candidateList[selectedIndex]
  if selWin then
    local app = selWin:application()
    local appName = (app and app:name()) or "?"
    local title = selWin:title() or ""
    local captionY = rowY + cfg.iconSize + 12

    elements[#elements + 1] = {
      type = "text",
      text = appName,
      textFont = ".AppleSystemUIFontBold",
      textSize = cfg.captionFontSize,
      textColor = { white = 1, alpha = 1 },
      textAlignment = "center",
      frame = { x = 10, y = captionY, w = w - 20, h = 20 },
    }
    elements[#elements + 1] = {
      type = "text",
      text = title,
      textFont = ".AppleSystemUIFont",
      textSize = cfg.captionFontSize - 2,
      textColor = { white = 0.8, alpha = 1 },
      textAlignment = "center",
      frame = { x = 10, y = captionY + 20, w = w - 20, h = 18 },
    }
  end

  canvas:replaceElements(elements)
end

function M.isActive()
  return switcherActive
end

function M.show(cfg)
  candidateList = candidates.build()
  if #candidateList == 0 then return false end
  selectedIndex = (#candidateList > 1) and 2 or 1

  local visibleCount = math.min(#candidateList, cfg.maxVisible)
  local w, h = computeCanvasSize(cfg, visibleCount)
  local screen = hs.screen.mainScreen():frame()
  local x = screen.x + (screen.w - w) / 2
  local y = screen.y + (screen.h - h) / 2

  -- Reuse the canvas across sessions instead of allocating a new one every
  -- time; hs.canvas.new() is comparatively expensive and this is on the hot
  -- path (fires on every alt-tab press).
  if not canvas then
    canvas = hs.canvas.new({ x = x, y = y, w = w, h = h })
    canvas:level(hs.canvas.windowLevels.overlay)
    canvas:behavior({ "canJoinAllSpaces", "stationary" })
  else
    canvas:frame({ x = x, y = y, w = w, h = h })
  end
  renderCanvas(cfg)
  canvas:show()
  switcherActive = true
  return true
end

function M.hide()
  if canvas then
    canvas:hide()
  end
  switcherActive = false
end

function M.cycle(cfg, direction)
  if not switcherActive then return end
  local n = #candidateList
  if n == 0 then return end
  selectedIndex = ((selectedIndex - 1 + direction) % n) + 1
  renderCanvas(cfg)
end

function M.confirmSelection()
  local win = candidateList[selectedIndex]
  M.hide()
  if win then win:focus() end
end

function M.teardown()
  M.hide()
  if canvas then
    canvas:delete()
    canvas = nil
  end
end

return M
