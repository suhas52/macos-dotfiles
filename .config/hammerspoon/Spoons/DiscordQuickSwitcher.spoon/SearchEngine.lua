local SearchEngine = {}

local KIND_BONUS = {
  dm = 8,
  group = 4,
  channel = 3,
  thread = 1,
  voice = 1,
  forum = 1,
}

local function splitWords(value)
  local words = {}
  local normalized = string.lower(value or ""):gsub("[_%-/%.:]+", " ")
  for word in string.gmatch(normalized, "%S+") do
    table.insert(words, word)
  end
  return words
end

local function maxScore(current, candidate)
  if candidate > current then
    return candidate
  end
  return current
end

local function tokens(channel)
  if not channel._tokens then
    channel._tokens = splitWords(channel._search or channel.search or "")
  end
  return channel._tokens
end

local function acronym(value)
  local result = {}
  for word in string.gmatch(value or "", "[%w_#]+") do
    table.insert(result, word:sub(1, 1))
  end
  return table.concat(result)
end

local function fuzzyScore(query, candidate)
  local score = 0
  local lastIndex = 0
  local streak = 0

  for i = 1, #query do
    local char = query:sub(i, i)
    local found = string.find(candidate, char, lastIndex + 1, true)
    if not found then
      return 0
    end
    if found == lastIndex + 1 then
      streak = streak + 1
      score = score + 12 + streak * 4
    else
      streak = 0
      score = score + math.max(2, 12 - (found - lastIndex))
    end
    lastIndex = found
  end

  return score
end

local function historyTables(history)
  if not history then
    return {}, {}
  end
  if history.history or history.guilds then
    return history.history or {}, history.guilds or {}
  end
  return history, {}
end

local function recordScore(record, now)
  if not record then
    return 0
  end

  local score = 0
  if record.favorite then
    score = score + 450
  end
  if record.count then
    score = score + math.min(180, math.log(record.count + 1) * 55)
  end
  if record.lastOpened then
    local ageDays = math.max(0, (now - record.lastOpened) / 86400)
    score = score + 220 * math.exp(-ageDays / 14)
  end
  if record.usageScore then
    score = score + math.min(120, record.usageScore)
  end

  return score
end

local function historyScore(channel, history, now)
  local channelHistory, guildHistory = historyTables(history)
  local score = recordScore(channelHistory[channel.channelId], now)

  if channel.serverId and guildHistory[channel.serverId] then
    score = score + (recordScore(guildHistory[channel.serverId], now) * 0.55)
  end

  return score
end

local function minimumTextScore(query)
  if #query <= 2 then
    return 80
  end
  return #query * 18
end

function SearchEngine.score(query, channel, history, now)
  local channelHistory = historyTables(history)
  local record = channelHistory[channel.channelId]
  if record and record.hidden then
    return nil
  end

  query = string.lower(query or "")
  local haystack = channel._search or string.lower(channel.search or "")
  local display = channel._display or string.lower(channel.displayName or "")
  now = now or os.time()

  if query == "" then
    return historyScore(channel, history, now) + (KIND_BONUS[channel.kind] or 0)
  end

  local textScore = 0
  if display == query or haystack == query then
    textScore = maxScore(textScore, 2200)
  end
  if display:sub(1, #query) == query then
    textScore = maxScore(textScore, 1500)
  end
  if haystack:sub(1, #query) == query then
    textScore = maxScore(textScore, 1300)
  end

  for _, token in ipairs(tokens(channel)) do
    if token == query then
      textScore = maxScore(textScore, 1850)
    elseif token:sub(1, #query) == query then
      textScore = maxScore(textScore, 1250)
    end
  end

  local foundAt = string.find(haystack, query, 1, true)
  if foundAt then
    textScore = maxScore(textScore, math.max(350, 850 - foundAt * 10))
  end

  local acro = acronym(haystack)
  if acro:sub(1, #query) == query then
    textScore = maxScore(textScore, 900)
  end

  local fuzzy = fuzzyScore(query, haystack)
  if fuzzy >= minimumTextScore(query) then
    textScore = textScore + math.min(220, fuzzy)
  end

  if textScore < minimumTextScore(query) then
    return nil
  end

  local personalScore = historyScore(channel, history, now)
  if textScore < 250 then
    personalScore = math.min(personalScore, 40)
  end

  local score = textScore + personalScore
  score = score + (KIND_BONUS[channel.kind] or 0)
  score = score - math.min(80, #haystack * 0.6)

  if score <= 0 then
    return nil
  end

  return score
end

function SearchEngine.search(query, channels, history, options)
  options = options or {}
  local maxResults = options.maxResults or 80
  local now = options.now or os.time()
  local results = {}

  for _, channel in ipairs(channels or {}) do
    local score = SearchEngine.score(query, channel, history, now)
    if score then
      table.insert(results, { channel = channel, score = score })
    end
  end

  table.sort(results, function(a, b)
    if a.score == b.score then
      return (a.channel.displayName or "") < (b.channel.displayName or "")
    end
    return a.score > b.score
  end)

  local limited = {}
  for index = 1, math.min(maxResults, #results) do
    limited[index] = results[index]
  end
  return limited
end

return SearchEngine
