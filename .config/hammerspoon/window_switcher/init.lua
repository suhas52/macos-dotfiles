local config = require("window_switcher.config")
local mru = require("window_switcher.mru")
local ui = require("window_switcher.ui")
local modifier_watch = require("window_switcher.modifier_watch")

local obj = {}
obj.__index = obj
obj.config = config

local escapeHotkey = nil
local eventTap = nil

local function cancelSwitcher()
    ui.hide()
    modifier_watch.stop()

    if escapeHotkey then
        escapeHotkey:disable()
    end
end

local function activateOrCycle(direction)
    if ui.isActive() then
        ui.cycle(obj.config, direction)
    else
        if ui.show(obj.config) then
            modifier_watch.start(obj.config.modifiers, function()
                ui.confirmSelection()

                if escapeHotkey then
                    escapeHotkey:disable()
                end
            end)

            if escapeHotkey then
                escapeHotkey:enable()
            end
        end
    end
end

local function flagsMatch(flags, wanted)
    local expected = {}

    for _, m in ipairs(wanted or {}) do
        expected[m] = true
    end

    local all = {
        "cmd",
        "alt",
        "shift",
        "ctrl",
        "fn",
    }

    for _, m in ipairs(all) do
        if flags[m] ~= expected[m] then
            return false
        end
    end

    return true
end

function obj.start(userConfig)
    for k, v in pairs(userConfig or {}) do
        obj.config[k] = v
    end

    if type(obj.config.modifiers) == "string" then
        obj.config.modifiers = { obj.config.modifiers }
    end

    mru.start()

    escapeHotkey = hs.hotkey.new({}, "escape", function()
        if ui.isActive() then
            cancelSwitcher()
        end
    end)

    eventTap = hs.eventtap.new({ hs.eventtap.event.types.keyDown }, function(event)
        local chars = event:getCharacters()
        local flags = event:getFlags()

        if not flagsMatch(flags, obj.config.modifiers) then
            return false
        end

        if chars == hs.keycodes.map[obj.config.key] or chars == "\t" then
            activateOrCycle(1)
            return true
        end

        if obj.config.reverseKey
            and flags.shift
            and chars == hs.keycodes.map[obj.config.reverseKey] then
            activateOrCycle(-1)
            return true
        end

        return false
    end)

    eventTap:start()

    return obj
end

function obj.stop()
    mru.stop()
    modifier_watch.stop()
    ui.teardown()

    if escapeHotkey then
        escapeHotkey:delete()
        escapeHotkey = nil
    end

    if eventTap then
        eventTap:stop()
        eventTap = nil
    end
end

return obj