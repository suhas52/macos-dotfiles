local Launcher = {}
Launcher.__index = Launcher

function Launcher.new()
  return setmetatable({}, Launcher)
end

function Launcher:open(url)
  if type(url) ~= "string" or url == "" then
    return false
  end
  return hs.urlevent.openURL(url)
end

return Launcher
