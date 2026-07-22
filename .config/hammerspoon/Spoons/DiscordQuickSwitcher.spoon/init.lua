local function loadModule(fileName)
  return dofile(hs.spoons.resourcePath(fileName))
end

local ChannelLoader = loadModule("ChannelLoader.lua")
local DiscordChooser = loadModule("DiscordChooser.lua")
local HistoryStore = loadModule("HistoryStore.lua")
local Launcher = loadModule("Launcher.lua")
local SearchEngine = loadModule("SearchEngine.lua")
local IconCache = loadModule("IconCache.lua")

local obj = {}
obj.__index = obj

obj.name = "DiscordQuickSwitcher"
obj.version = "0.1.0"
obj.author = "suhas"
obj.license = "MIT"
obj.homepage = "https://github.com/suhas/hammerspoon-discord-switcher"

obj.config = {
  channelsPath = "~/channels.json",
  maxResults = 80,
  hotkey = { { "cmd", "shift" }, "d" },
  iconCacheDir = "~/.cache/hs-discord-chooser/icons",
  iconTTL = 7 * 24 * 60 * 60,
  iconSize = 128,
}

function obj:init()
  self.history = HistoryStore.new("DiscordQuickSwitcher.history")
  self.loader = ChannelLoader.new(self.config.channelsPath)
  self.launcher = Launcher.new()
  self.search = SearchEngine
  self.icons = IconCache.new({
    dir = self.config.iconCacheDir,
    ttl = self.config.iconTTL,
    size = self.config.iconSize,
  })
  self.chooser = DiscordChooser.new({
    loader = self.loader,
    history = self.history,
    launcher = self.launcher,
    search = self.search,
    icons = self.icons,          -- add this
    maxResults = self.config.maxResults,
  })
  self.loader:onReload(function()
    self.chooser:refresh()
  end)
  self.loader:load()
  return self
end

function obj:start()
  if not self.loader then
    self:init()
  end

  self.loader:startWatching()
  self.chooser:start()

  local mods = self.config.hotkey[1]
  local key = self.config.hotkey[2]
  self.hotkey = hs.hotkey.bind(mods, key, function()
    self:show()
  end)

  return self
end

function obj:stop()
  if self.hotkey then
    self.hotkey:delete()
    self.hotkey = nil
  end
  if self.loader then
    self.loader:stopWatching()
  end
  if self.chooser then
    self.chooser:hide()
  end
  return self
end

function obj:show()
  if not self.chooser then
    self:init()
  end
  self.chooser:show()
end

function obj:toggleFavorite(channelId)
  return self.history:toggleFavorite(channelId)
end

function obj:hideChannel(channelId)
  self.history:setHidden(channelId, true)
end

function obj:unhideChannel(channelId)
  self.history:setHidden(channelId, false)
end

return obj
