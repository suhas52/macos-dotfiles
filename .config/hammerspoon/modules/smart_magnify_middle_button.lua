local M = {}

local DOUBLE_CLICK_TIME = 0.20

local clickCount = 0
local clickTimer = nil

function M.start()
    M.tap = hs.eventtap.new({
        hs.eventtap.event.types.otherMouseDown,
    }, function(event)
        local button = event:getProperty(
            hs.eventtap.event.properties.mouseEventButtonNumber
        )
        local flags = event:getFlags()

        if not (flags.cmd and button == 2) then
            return false
        end

        clickCount = clickCount + 1

        if clickCount == 1 then
            clickTimer = hs.timer.doAfter(DOUBLE_CLICK_TIME, function()
                clickCount = 0
                clickTimer = nil
                hs.spaces.toggleMissionControl()
            end)

        elseif clickCount == 2 then
            if clickTimer then
                clickTimer:stop()
                clickTimer = nil
            end

            clickCount = 0

            hs.eventtap.event
                .newGesture("smartMagnify")
                :post()
        end

        return true
    end)

    M.tap:start()
end

return M
