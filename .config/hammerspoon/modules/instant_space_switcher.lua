local M = {}

function M.start()
    M.tap = hs.eventtap.new({
        hs.eventtap.event.types.otherMouseDown,
        hs.eventtap.event.types.otherMouseUp,
    }, function(event)
        local button = event:getProperty(
            hs.eventtap.event.properties.mouseEventButtonNumber
        )
        local flags = event:getFlags()

        if flags.cmd and (button == 3 or button == 4) then
            if event:getType() == hs.eventtap.event.types.otherMouseDown then
                hs.execute('/usr/bin/open -g "instantspaceswitcher://' ..
                    (button == 3 and "left" or "right") .. '"')
            end
            return true
        end

        return false
    end)

    M.tap:start()
end

return M
