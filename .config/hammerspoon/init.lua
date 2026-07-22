require("modules.brightness").start()
require("modules.instant_space_switcher").start()
require("modules.reverse_mouse_scroll").start()

require("modules.smart_magnify_middle_button").start()

require("window_switcher").start({
 modifiers  = { "cmd" },  -- hold this
 key        = "tab",      -- tap this to cycle forward
 reverseKey = nil,        -- e.g. set to a key and bind shift+alt for reverse cycling
})

hs.loadSpoon("DiscordQuickSwitcher")
spoon.DiscordQuickSwitcher.config.channelsPath = "~/.local/channels.json"
spoon.DiscordQuickSwitcher:start()
