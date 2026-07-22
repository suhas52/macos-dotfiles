local ChannelLoader = {}
ChannelLoader.__index = ChannelLoader

local function expandPath(path)
  if path:sub(1, 2) == "~/" then
    return "./Spoons/DiscordQuickSwitcher.spoon" .. path:sub(2)
  end
  return path
end

local function isValidKind(kind)
  return kind == "dm"
    or kind == "group"
    or kind == "guild"
    or kind == "channel"
    or kind == "thread"
    or kind == "voice"
    or kind == "forum"
end

local function kindFromChannelType(channelType)
  if channelType == 2 then
    return "voice"
  end
  if channelType == 10 or channelType == 11 or channelType == 12 then
    return "thread"
  end
  if channelType == 15 then
    return "forum"
  end
  return "channel"
end

local function normalize(entry)
  if type(entry) ~= "table" or not isValidKind(entry.kind) then
    return nil
  end

  local displayName = entry.displayName or entry.channelName
  local search = entry.search
  local url = entry.url
  local channelId = entry.channelId

  if type(displayName) ~= "string"
    or type(search) ~= "string"
    or type(url) ~= "string"
    or type(channelId) ~= "string" then
    return nil
  end

  local channel = {}
  for key, value in pairs(entry) do
    channel[key] = value
  end

  channel.kind = entry.kind == "guild" and kindFromChannelType(entry.channelType) or entry.kind
  channel.channelId = channelId
  channel.displayName = displayName
  channel.username = entry.username
  channel.serverTag = entry.serverTag or entry.guildName
  channel.serverId = entry.serverId or entry.guildId
  channel.search = search
  channel.url = url
  channel._search = string.lower(search)
  channel._display = string.lower(displayName)
  channel._tokens = nil

  return channel
end

local function validate(entry)
  return type(entry) == "table"
    and type(entry.channelId) == "string"
    and (type(entry.displayName) == "string" or type(entry.channelName) == "string")
    and type(entry.search) == "string"
    and type(entry.url) == "string"
    and isValidKind(entry.kind)
end

function ChannelLoader.new(path)
  return setmetatable({
    path = expandPath(path or "~/.local/channels.json"),
    channels = {},
    errors = {},
    callbacks = {},
    watcher = nil,
    reloadTimer = nil,
  }, ChannelLoader)
end

function ChannelLoader:getChannels()
  return self.channels
end

function ChannelLoader:getErrors()
  return self.errors
end

function ChannelLoader:onReload(callback)
  table.insert(self.callbacks, callback)
end

function ChannelLoader:notify()
  for _, callback in ipairs(self.callbacks) do
    callback(self.channels, self.errors)
  end
end

function ChannelLoader:load()
  self.errors = {}

  if not hs.fs.attributes(self.path) then
    self.channels = {}
    table.insert(self.errors, "Missing channels file: " .. self.path)
    self:notify()
    return false
  end

  local raw = hs.json.read(self.path)
  if type(raw) ~= "table" then
    self.channels = {}
    table.insert(self.errors, "channels.json must contain a JSON array")
    self:notify()
    return false
  end

  local channels = {}
  for index, entry in ipairs(raw) do
    local channel = normalize(entry)
    if validate(entry) and channel then
      table.insert(channels, channel)
    else
      table.insert(self.errors, "Invalid channel at index " .. tostring(index))
    end
  end

  self.channels = channels
  self:notify()
  return true
end

function ChannelLoader:startWatching()
  if self.watcher then
    return
  end

  local directory = self.path:match("^(.*)/[^/]+$")
  self.watcher = hs.pathwatcher.new(directory, function(paths)
    for _, changedPath in ipairs(paths) do
      if changedPath == self.path then
        if self.reloadTimer then
          self.reloadTimer:stop()
        end
        self.reloadTimer = hs.timer.doAfter(0.15, function()
          self:load()
        end)
        return
      end
    end
  end)
  self.watcher:start()
end

function ChannelLoader:stopWatching()
  if self.watcher then
    self.watcher:stop()
    self.watcher = nil
  end
  if self.reloadTimer then
    self.reloadTimer:stop()
    self.reloadTimer = nil
  end
end

return ChannelLoader
