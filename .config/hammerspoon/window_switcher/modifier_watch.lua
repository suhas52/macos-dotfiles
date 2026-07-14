-- Uses a short-interval polling timer rather than an hs.eventtap watching
-- flagsChanged. The eventtap approach has two failure modes that show up as
-- a "stuck" modal: (1) a race where the modifier is released before the tap
-- has finished being installed, so the release event is simply never seen,
-- and (2) macOS will silently disable an event tap it judges to be slow to
-- respond, with no automatic re-enable. Polling
-- hs.eventtap.checkKeyboardModifiers() directly sidesteps both, at the cost
-- of a few extra checks per second while the switcher is open.

local MODIFIER_FLAGS = {
  alt = "alt", option = "alt",
  cmd = "cmd", command = "cmd",
  shift = "shift",
  ctrl = "ctrl", control = "ctrl",
}

local MAX_SWITCHER_SECONDS = 15 -- hard safety net; never stay open longer than this

local M = {}

local timer = nil
local startTime = nil

local function modifiersStillHeld(modifiers, flags)
  for _, m in ipairs(modifiers) do
    local flagName = MODIFIER_FLAGS[m] or m
    if not flags[flagName] then return false end
  end
  return true
end

function M.stop()
  if timer then
    timer:stop()
    timer = nil
  end
  startTime = nil
end

function M.start(modifiers, onRelease)
  M.stop()
  startTime = hs.timer.secondsSinceEpoch()
  timer = hs.timer.new(0.03, function()
    local flags = hs.eventtap.checkKeyboardModifiers()
    if not modifiersStillHeld(modifiers, flags) then
      onRelease()
      M.stop()
      return
    end
    if hs.timer.secondsSinceEpoch() - startTime > MAX_SWITCHER_SECONDS then
      onRelease()
      M.stop()
    end
  end)
  timer:start()
end

return M
