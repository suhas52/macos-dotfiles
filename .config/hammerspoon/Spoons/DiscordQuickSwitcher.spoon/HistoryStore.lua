local HistoryStore = {}
HistoryStore.__index = HistoryStore

function HistoryStore.new(settingsKey)
  local self = setmetatable({
    settingsKey = settingsKey or "DiscordQuickSwitcher.history",
    data = nil,
  }, HistoryStore)
  self:load()
  return self
end

function HistoryStore:load()
  self.data = hs.settings.get(self.settingsKey) or { history = {} }
  self.data.history = self.data.history or {}
  self.data.guilds = self.data.guilds or {}
  return self.data
end

function HistoryStore:save()
  hs.settings.set(self.settingsKey, self.data)
end

function HistoryStore:all()
  return self.data
end

function HistoryStore:getChannel(channelId)
  self.data.history[channelId] = self.data.history[channelId] or {}
  return self.data.history[channelId]
end

function HistoryStore:getGuild(guildId)
  self.data.guilds[guildId] = self.data.guilds[guildId] or {}
  return self.data.guilds[guildId]
end

function HistoryStore:bumpRecord(record, now)
  record.count = (record.count or 0) + 1
  record.lastOpened = now
  record.usageScore = ((record.usageScore or 0) * 0.82) + 50
end

function HistoryStore:recordOpen(channel)
  local now = os.time()
  local channelId = type(channel) == "table" and channel.channelId or channel
  local record = self:getChannel(channelId)
  self:bumpRecord(record, now)

  if type(channel) == "table" and channel.serverId then
    local guild = self:getGuild(channel.serverId)
    self:bumpRecord(guild, now)
  end

  self:save()
end

function HistoryStore:isFavorite(channelId)
  local record = self.data.history[channelId]
  return record and record.favorite == true
end

function HistoryStore:toggleFavorite(channelId)
  local record = self:getChannel(channelId)
  record.favorite = not record.favorite
  self:save()
  return record.favorite
end

function HistoryStore:setHidden(channelId, hidden)
  local record = self:getChannel(channelId)
  record.hidden = hidden == true
  self:save()
end

return HistoryStore
