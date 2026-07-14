local M = {}

function M.start()
    hs.hotkey.bind({"cmd", "ctrl"}, "T", function()
        hs.task.new("/opt/homebrew/bin/kitty", nil):start()
    end)

end

return M
