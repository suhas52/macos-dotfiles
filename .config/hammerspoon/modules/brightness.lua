local M = {}

local brightness = "/Users/suhas/.local/repos/brightness/brightness.arm64"

local high = 0.6
local low = 0.45

local function set(level)
    hs.task.new(brightness, nil, { tostring(level) }):start()
end

local function updateBrightness()
    if hs.battery.powerSource() == "AC Power" then
        set(high)
        print("brightness set to:", high)
    else
        hs.timer.doAfter(2, function()
            if hs.battery.powerSource() == "Battery Power" then
                set(low)
                print("brightness set to:", low)
            end
        end)
    end
end

function M.start()
    M.watcher = hs.battery.watcher.new(updateBrightness)
    M.watcher:start()
    updateBrightness()
end

return M
