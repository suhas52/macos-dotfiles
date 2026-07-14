local M = {}

function M.isValidWindow(win)
  if not win then return false end
  local ok, isStandard = pcall(function() return win:isStandard() end)
  if not ok or not isStandard then return false end
  if win:isMinimized() then return false end
  if not win:isVisible() then return false end
  if not win:application() then return false end
  return true
end

function M.currentSpaceWindowIDSet()
  local spaceID = hs.spaces.focusedSpace()
  local ids = hs.spaces.windowsForSpace(spaceID) or {}
  local set = {}
  for _, id in ipairs(ids) do set[id] = true end
  return set
end

return M
