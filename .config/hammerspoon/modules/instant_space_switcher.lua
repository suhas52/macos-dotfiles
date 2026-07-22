local M = {}

local tap

function M.start()
    if tap then
        tap:stop()
    end

    tap = hs.eventtap.new(
        { hs.eventtap.event.types.otherMouseDown },
        function(e)
            local button = e:getProperty(
                hs.eventtap.event.properties.mouseEventButtonNumber
            )
            local flags = e:getFlags()

            -- Only trigger when Command is held
            if not flags.cmd then
                return false
            end

            if button == 3 then
                hs.eventtap.keyStroke({"ctrl"}, "j", 0)
                return true
            elseif button == 4 then
                hs.eventtap.keyStroke({"ctrl"}, "k", 0)
                return true
            end

            return false
        end
    )

    tap:start()
    hs.printf("space_mouse: started")
end

function M.stop()
    if tap then
        tap:stop()
        tap = nil
        hs.printf("space_mouse: stopped")
    end
end

return M
