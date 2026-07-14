local window_utils = require("window_switcher.window_utils")

local M = {}

local list = {}
local wf = nil

function M.remove(id)
  for i, v in ipairs(list) do
    if v == id then
      table.remove(list, i)
      return
    end
  end
end

function M.pushFront(id)
  M.remove(id)
  table.insert(list, 1, id)
end

function M.get()
  return list
end

local function onWindowFocused(win)
  if not win then return end
  local id = win:id()
  if id then M.pushFront(id) end
end

local function onWindowDestroyed(win)
  if not win then return end
  local id = win:id()
  if id then M.remove(id) end
end

function M.seed()
  list = {}
  for _, win in ipairs(hs.window.visibleWindows()) do
    if window_utils.isValidWindow(win) then
      list[#list + 1] = win:id()
    end
  end
  local front = hs.window.frontmostWindow()
  if front then M.pushFront(front:id()) end
end

-- Tracked globally (not Space-scoped) so the MRU order stays accurate even
-- for windows currently on other Spaces.
function M.start()
  wf = hs.window.filter.new(true)
  wf:subscribe(hs.window.filter.windowFocused, onWindowFocused)
  wf:subscribe(hs.window.filter.windowDestroyed, onWindowDestroyed)
  M.seed()
end

function M.stop()
  if wf then
    wf:unsubscribeAll()
    wf = nil
  end
end

return M
