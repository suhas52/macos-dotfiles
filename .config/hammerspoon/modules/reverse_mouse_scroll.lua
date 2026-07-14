local M = {}

function M.start()
    M.tap = hs.eventtap.new(
        { hs.eventtap.event.types.scrollWheel },
        function(event)
            local isContinuous = event:getProperty(
                hs.eventtap.event.properties.scrollWheelEventIsContinuous
            )

            -- Trackpad (continuous scrolling)
            if isContinuous == 1 then
                return false
            end

            -- Reverse vertical scroll
            event:setProperty(
                hs.eventtap.event.properties.scrollWheelEventDeltaAxis1,
                -event:getProperty(
                    hs.eventtap.event.properties.scrollWheelEventDeltaAxis1
                )
            )

            -- Reverse horizontal scroll as well (optional)
            local axis2 = hs.eventtap.event.properties.scrollWheelEventDeltaAxis2
            local dx = event:getProperty(axis2)
            if dx then
                event:setProperty(axis2, -dx)
            end

            return false
        end
    )

    M.tap:start()
end

return M
