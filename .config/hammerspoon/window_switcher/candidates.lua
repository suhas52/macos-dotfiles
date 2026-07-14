local window_utils = require("window_switcher.window_utils")
local mru = require("window_switcher.mru")

local M = {}

-- Windows on the current Space, valid (standard/visible/not minimized),
-- ordered by MRU with any unseen windows appended.
function M.build()
  local spaceIDs = window_utils.currentSpaceWindowIDSet()

  local seen = {}
  local validByID = {}

  -- Single pass over hs.window.allWindows(): hs.window.get(id) rescans
  -- every window each time it's called, so looking windows up one id at a
  -- time in a loop is O(n^2) and is the main source of slowness once more
  -- than a handful of windows are open.
  for _, win in ipairs(hs.window.allWindows()) do
    local id = win:id()
    if id and spaceIDs[id] and window_utils.isValidWindow(win) then
      seen[id] = true
      validByID[id] = win
    end
  end

  local ordered = {}

  for _, id in ipairs(mru.get()) do
    if seen[id] then
      ordered[#ordered + 1] = validByID[id]
      seen[id] = nil
    end
  end

  for id, win in pairs(validByID) do
    if seen[id] then
      ordered[#ordered + 1] = win
      seen[id] = nil
    end
  end

  return ordered
end

return M
