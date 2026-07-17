local M = {}

function M.isValidWindow(win)
    if not win then return false end
    if win:isMinimized() then return false end
    if not win:isVisible() then return false end

    local app = win:application()
    if not app then return false end

    local ok, standard = pcall(function() return win:isStandard() end)
    if ok and standard then
        return true
    end

    -- Exception for VLC legacy fullscreen
    if app:name() == "VLC" and
       win:role() == "AXWindow" and
       win:subrole() == "AXUnknown" then
        return true
    end

    return false
end

function M.currentSpaceWindowIDSet()
  local spaceID = hs.spaces.focusedSpace()
  local ids = hs.spaces.windowsForSpace(spaceID) or {}
  local set = {}
  for _, id in ipairs(ids) do set[id] = true end
  return set
end

return M
