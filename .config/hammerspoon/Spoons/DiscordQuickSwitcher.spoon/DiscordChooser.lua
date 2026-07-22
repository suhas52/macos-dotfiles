local DiscordChooser = {}
DiscordChooser.__index = DiscordChooser

local ICONS = {
  dm = "DM",
  group = "GRP",
  channel = "#",
  thread = "THR",
  voice = "VOC",
  forum = "FRM",
}

local function subtitle(channel, favorite)
  local pieces = {}
  table.insert(pieces, ICONS[channel.kind] or string.upper(channel.kind or ""))
  if channel.serverTag and channel.serverTag ~= hs.json.null then
    table.insert(pieces, channel.serverTag)
  elseif channel.username and channel.username ~= hs.json.null then
    table.insert(pieces, channel.username)
  end
  if favorite then
    table.insert(pieces, "Favorite")
  end
  return table.concat(pieces, " - ")
end

function DiscordChooser.new(options)
  local self = setmetatable({
    loader = options.loader,
    history = options.history,
    launcher = options.launcher,
    search = options.search,
    icons = options.icons, -- optional IconCache instance
    maxResults = options.maxResults or 80,
    currentQuery = "",
    chooser = nil,
  }, DiscordChooser)
  return self
end

function DiscordChooser:start()
  if self.chooser then
    return
  end

  self.chooser = hs.chooser.new(function(choice)
    if not choice then
      return
    end

    local channel = choice.channel
    local modifiers = hs.eventtap.checkKeyboardModifiers()
    if modifiers.shift then
      hs.pasteboard.setContents(channel.url)
      return
    end
    if modifiers.alt then
      hs.pasteboard.setContents(channel.channelId)
      return
    end

    self.history:recordOpen(channel)
    self.launcher:open(channel.url)
  end)

  self.chooser:placeholderText("Discord")
  self.chooser:searchSubText(true)
  self.chooser:queryChangedCallback(function(query)
    self.currentQuery = query or ""
    self:refresh()
  end)

  self:refresh()
end

-- Resolves an icon for a channel via the IconCache, if one was provided.
-- Returns an hs.image (possibly nil if nothing cached yet) and schedules a
-- refresh of the chooser once a background fetch completes.
function DiscordChooser:_iconFor(channel)
  if not self.icons then
    return nil
  end

  local onReady = function()
    -- Only bother redrawing if this result set is still showing.
    self:refresh()
  end

  if channel.kind == "guild" or channel.kind == "channel" or channel.kind == "thread"
    or channel.kind == "voice" or channel.kind == "forum" then
    local guildId = channel.guildId or channel.serverId
    if channel.guildIcon and guildId then
      return self.icons:get("guild", guildId, channel.guildIcon, onReady)
    end
  end

  if channel.kind == "dm" or channel.kind == "group" then
    if channel.userAvatar and channel.userId then
      return self.icons:get("user", channel.userId, channel.userAvatar, onReady)
    end
  end

  return nil
end

function DiscordChooser:choicesFor(query)
  
  local limit = (query == nil or query == "") and 5 or self.maxResults

  local results = self.search.search(
    query,
    self.loader:getChannels(),
    self.history:all(),
    {
      maxResults = limit,
    }
  )

  local choices = {}

  for _, result in ipairs(results) do
    local channel = result.channel
    table.insert(choices, {
      text = channel.displayName,
      subText = subtitle(channel, self.history:isFavorite(channel.channelId)),
      image = self:_iconFor(channel),
      channel = channel,
    })
  end

  local errors = self.loader:getErrors()
  if #choices == 0 and #errors > 0 then
    return {
      {
        text = "Discord Quick Switcher",
        subText = errors[1],
        disabled = true,
      },
    }
  end

  return choices
end

function DiscordChooser:refresh()
  if not self.chooser then
    return
  end
  self.chooser:choices(self:choicesFor(self.currentQuery))
end

function DiscordChooser:show()
  self:start()
  self.currentQuery = ""
  self.chooser:query("")
  self:refresh()
  self.chooser:show()
end

function DiscordChooser:hide()
  if self.chooser then
    self.chooser:hide()
  end
end

return DiscordChooser
