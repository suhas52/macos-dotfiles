local IconCache = {}
IconCache.__index = IconCache

local DEFAULT_TTL = 7 * 24 * 60 * 60 -- 7 days
local DEFAULT_SIZE = 128

local function expandPath(path)
  if path:sub(1, 2) == "~/" then
    return os.getenv("HOME") .. path:sub(2)
  end
  return path
end

-- mkdir -p equivalent
local function ensureDir(path)
  local built = ""
  for part in path:gmatch("[^/]+") do
    built = built .. "/" .. part
    if not hs.fs.attributes(built) then
      hs.fs.mkdir(built)
    end
  end
end

local function isAnimated(hash)
  return type(hash) == "string" and hash:sub(1, 2) == "a_"
end

local function extFor(hash)
  return isAnimated(hash) and "gif" or "png"
end

local function urlFor(kind, id, hash, size)
  local ext = extFor(hash)
  if kind == "guild" then
    return string.format("https://cdn.discordapp.com/icons/%s/%s.%s?size=%d", id, hash, ext, size)
  elseif kind == "user" then
    return string.format("https://cdn.discordapp.com/avatars/%s/%s.%s?size=%d", id, hash, ext, size)
  end
  return nil
end

local function isBlank(value)
  return value == nil or value == hs.json.null or value == ""
end

--- IconCache.new(options)
-- options.dir  - cache directory (default "~/.cache/hs-discord-chooser/icons")
-- options.ttl  - seconds before a cached icon is considered stale (default 7 days)
-- options.size - requested CDN image size (default 128)
function IconCache.new(options)
  options = options or {}
  local dir = expandPath(options.dir or "~/.cache/hs-discord-chooser/icons")
  ensureDir(dir)

  return setmetatable({
    dir = dir,
    ttl = options.ttl or DEFAULT_TTL,
    size = options.size or DEFAULT_SIZE,
    pending = {},
    images = {}, -- in-memory hs.image cache, keyed by "kind_id_hash"
  }, IconCache)
end

function IconCache:_keyFor(kind, id, hash)
  return kind .. "_" .. tostring(id) .. "_" .. hash
end

function IconCache:_pathFor(kind, id, hash)
  return string.format("%s/%s_%s_%s.%s", self.dir, kind, id, hash, extFor(hash))
end

function IconCache:_isFresh(path)
  local attrs = hs.fs.attributes(path)
  if not attrs or not attrs.modification then
    return false
  end
  return (os.time() - attrs.modification) < self.ttl
end

--- IconCache:get(kind, id, hash, onReady)
-- kind: "guild" or "user"
-- id:   guildId or userId
-- hash: guildIcon or userAvatar hash from channels.json
-- onReady(image): optional callback invoked once a *new or refreshed* image
--                  is available on disk (not called if the in-memory cache
--                  already satisfies the request).
--
-- Returns an hs.image immediately if one is available (fresh or stale),
-- or nil if nothing is cached yet. A background fetch is kicked off
-- whenever the cached copy is missing or older than the TTL.
function IconCache:get(kind, id, hash, onReady)
  if isBlank(hash) or isBlank(id) then
    return nil
  end

  local key = self:_keyFor(kind, id, hash)
  local path = self:_pathFor(kind, id, hash)

  -- Serve from memory if we already loaded it and it's still fresh.
  if self.images[key] and self:_isFresh(path) then
    return self.images[key]
  end

  -- Load from disk if present (even if stale, so we have something to show
  -- while a refresh happens in the background).
  if not self.images[key] and hs.fs.attributes(path) then
    local image = hs.image.imageFromPath(path)
    if image then
      self.images[key] = image
    end
  end

  if not self:_isFresh(path) then
    self:_fetch(kind, id, hash, key, path, onReady)
  end

  return self.images[key]
end

function IconCache:_fetch(kind, id, hash, key, path, onReady)
  if self.pending[key] then
    return
  end
  self.pending[key] = true

  local url = urlFor(kind, id, hash, self.size)
  if not url then
    self.pending[key] = nil
    return
  end

  hs.http.asyncGet(url, nil, function(status, body, _headers)
    self.pending[key] = nil

    if status ~= 200 or not body or #body == 0 then
      return
    end

    local file = io.open(path, "wb")
    if not file then
      return
    end
    file:write(body)
    file:close()

    local image = hs.image.imageFromPath(path)
    if image then
      self.images[key] = image
      if onReady then
        onReady(image)
      end
    end
  end)
end

--- Wipes the on-disk cache and in-memory images. Useful for a manual
-- "reset icons" command.
function IconCache:clear()
  for file in hs.fs.dir(self.dir) do
    if file ~= "." and file ~= ".." then
      os.remove(self.dir .. "/" .. file)
    end
  end
  self.images = {}
  self.pending = {}
end

return IconCache
