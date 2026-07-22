"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/open-discord-channel.tsx
var open_discord_channel_exports = {};
__export(open_discord_channel_exports, {
  default: () => Command
});
module.exports = __toCommonJS(open_discord_channel_exports);
var import_api3 = require("@raycast/api");
var import_react = require("react");

// src/channel-loader.ts
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");

// src/types.ts
var channelKinds = ["dm", "group", "guild", "channel", "thread", "voice", "forum"];

// src/channel-loader.ts
var cache;
function expandPath(path) {
  if (path === "~") {
    return (0, import_os.homedir)();
  }
  if (path.startsWith("~/")) {
    return (0, import_path.resolve)((0, import_os.homedir)(), path.slice(2));
  }
  return (0, import_path.resolve)(path);
}
function loadChannels(path) {
  const expandedPath = expandPath(path);
  if (!(0, import_fs.existsSync)(expandedPath)) {
    throw new Error(`Channels file not found: ${expandedPath}`);
  }
  const stats = (0, import_fs.statSync)(expandedPath);
  if (cache?.path === expandedPath && cache.mtimeMs === stats.mtimeMs) {
    return cache.channels;
  }
  const parsed = JSON.parse((0, import_fs.readFileSync)(expandedPath, "utf8"));
  if (!Array.isArray(parsed)) {
    throw new Error("Channels JSON must be an array.");
  }
  const channels = parsed.map(validateChannel);
  cache = { path: expandedPath, mtimeMs: stats.mtimeMs, channels };
  return channels;
}
function validateChannel(value, index) {
  if (!value || typeof value !== "object") {
    throw new Error(`Channel at index ${index} must be an object.`);
  }
  const item = value;
  const kind = readString(item.kind, "kind", index);
  if (!channelKinds.includes(kind)) {
    throw new Error(`Channel at index ${index} has an unsupported kind: ${kind}`);
  }
  const channelId = readString(item.channelId, "channelId", index);
  const channelName = readOptionalString(item.channelName);
  const guildName = readOptionalString(item.guildName);
  const categoryName = readOptionalString(item.categoryName);
  return {
    kind,
    channelId,
    userId: readNullableString(item.userId, "userId", index),
    displayName: readOptionalString(item.displayName) ?? formatChannelName(channelName) ?? readOptionalString(item.username) ?? guildName ?? `Channel ${channelId}`,
    username: readNullableString(item.username, "username", index),
    serverTag: readNullableString(item.serverTag, "serverTag", index) ?? formatServerContext(guildName, categoryName),
    serverId: readNullableString(item.serverId, "serverId", index) ?? readNullableString(item.guildId, "guildId", index),
    search: readOptionalString(item.search)?.toLowerCase() ?? "",
    url: readString(item.url, "url", index)
  };
}
function readString(value, field, index) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Channel at index ${index} needs a non-empty ${field}.`);
  }
  return value;
}
function readNullableString(value, field, index) {
  if (value === null || value === void 0) {
    return null;
  }
  if (typeof value !== "string") {
    throw new Error(`Channel at index ${index} has invalid ${field}.`);
  }
  return value;
}
function readOptionalString(value) {
  if (typeof value !== "string") {
    return void 0;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : void 0;
}
function formatChannelName(channelName) {
  if (!channelName) {
    return void 0;
  }
  return channelName.startsWith("#") ? channelName : `#${channelName}`;
}
function formatServerContext(guildName, categoryName) {
  return [guildName, categoryName].filter(Boolean).join(" \u2022 ") || null;
}

// src/history-store.ts
var import_api = require("@raycast/api");
var storageKey = "discord-quick-switcher-history";
var halfLifeDays = 21;
async function loadHistory() {
  const stored = await import_api.LocalStorage.getItem(storageKey);
  if (!stored) {
    return { history: {} };
  }
  try {
    const parsed = JSON.parse(stored);
    return { history: parsed.history ?? {} };
  } catch {
    return { history: {} };
  }
}
async function recordSelection(state, channelId) {
  const now = Date.now();
  const previous = state.history[channelId];
  const next = {
    count: (previous?.count ?? 0) + 1,
    lastOpened: now,
    rollingScore: decayedScore(previous, now) + 1,
    favorite: previous?.favorite ?? false,
    hidden: previous?.hidden
  };
  const nextState = { history: { ...state.history, [channelId]: next } };
  await saveHistory(nextState);
  return nextState;
}
async function setFavorite(state, channelId, favorite) {
  const previous = state.history[channelId];
  const nextState = {
    history: {
      ...state.history,
      [channelId]: {
        count: previous?.count ?? 0,
        lastOpened: previous?.lastOpened ?? 0,
        rollingScore: previous?.rollingScore ?? 0,
        hidden: previous?.hidden,
        favorite
      }
    }
  };
  await saveHistory(nextState);
  return nextState;
}
function recencyScore(history, now = Date.now()) {
  return decayedScore(history, now);
}
async function saveHistory(state) {
  await import_api.LocalStorage.setItem(storageKey, JSON.stringify(state));
}
function decayedScore(history, now) {
  if (!history?.lastOpened) {
    return 0;
  }
  const ageDays = Math.max(0, now - history.lastOpened) / 864e5;
  return (history.rollingScore || history.count || 0) * Math.pow(0.5, ageDays / halfLifeDays);
}

// src/launcher.ts
var import_api2 = require("@raycast/api");
async function openDiscordUrl(url) {
  await (0, import_api2.open)(url);
  await (0, import_api2.closeMainWindow)({ clearRootSearch: true, popToRootType: import_api2.PopToRootType.Immediate });
}

// src/search-engine.ts
var favoriteBonus = 900;
var recentThresholdMs = 30 * 24 * 60 * 60 * 1e3;
function rankChannels(query, channels, historyState, filter = "all", limit = 100) {
  const normalizedQuery = normalize(query);
  const queryTokens = tokenize(normalizedQuery);
  const now = Date.now();
  return channels.map((channel) => {
    const history = historyState.history[channel.channelId];
    return { ...channel, history, score: scoreChannel(channel, normalizedQuery, queryTokens, historyState, now) };
  }).filter((channel) => matchesFilter(channel, filter, now)).filter((channel) => !channel.history?.hidden).filter((channel) => normalizedQuery.length > 0 || wasPreviouslyOpened(channel)).filter((channel) => normalizedQuery.length === 0 || channel.score > 0).sort((a, b) => b.score - a.score || a.displayName.localeCompare(b.displayName)).slice(0, limit);
}
function wasPreviouslyOpened(channel) {
  return Boolean(channel.history?.lastOpened || channel.history?.count);
}
function scoreChannel(channel, query, queryTokens, historyState, now) {
  const history = historyState.history[channel.channelId];
  const haystack = normalize(channel.search);
  const displayName = normalize(channel.displayName);
  const tokens = tokenize(haystack);
  let score = query ? 0 : 50;
  if (query) {
    if (displayName === query || haystack === query) score += 1e4;
    if (displayName.startsWith(query)) score += 8e3;
    if (haystack.startsWith(query)) score += 6e3;
    if (tokens.some((token) => token.startsWith(query))) score += 4500;
    if (haystack.includes(query)) score += 2e3;
    if (acronym(tokens).startsWith(query)) score += 1600;
    score += queryTokens.every((token) => tokens.some((searchToken) => searchToken.startsWith(token))) ? 1200 : 0;
    score += fuzzyScore(query, haystack);
  }
  score += recencyScore(history, now) * 300;
  if (history?.favorite) score += favoriteBonus;
  score -= Math.min(displayName.length, 80) * 3;
  return score;
}
function matchesFilter(channel, filter, now) {
  switch (filter) {
    case "dms":
      return channel.kind === "dm" || channel.kind === "group";
    case "servers":
      return channel.kind === "guild" || channel.kind === "channel" || channel.kind === "voice" || channel.kind === "forum";
    case "threads":
      return channel.kind === "thread";
    case "favorites":
      return channel.history?.favorite === true;
    case "recent":
      return Boolean(channel.history?.lastOpened && now - channel.history.lastOpened < recentThresholdMs);
    default:
      return true;
  }
}
function fuzzyScore(query, text) {
  let queryIndex = 0;
  let score = 0;
  let streak = 0;
  for (let textIndex = 0; textIndex < text.length && queryIndex < query.length; textIndex += 1) {
    if (text[textIndex] !== query[queryIndex]) {
      streak = 0;
      continue;
    }
    score += 120 + streak * 80;
    if (textIndex === 0 || text[textIndex - 1] === " ") score += 120;
    streak += 1;
    queryIndex += 1;
  }
  return queryIndex === query.length ? score : 0;
}
function normalize(value) {
  return value.toLowerCase().trim();
}
function tokenize(value) {
  return value.split(/[^a-z0-9_#!]+/).filter(Boolean);
}
function acronym(tokens) {
  return tokens.map((token) => token[0]).join("");
}

// src/open-discord-channel.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var filters = [
  { id: "all", title: "All" },
  { id: "dms", title: "DMs" },
  { id: "servers", title: "Servers" },
  { id: "threads", title: "Threads" },
  { id: "favorites", title: "Favorites" },
  { id: "recent", title: "Recent" }
];
function Command() {
  const preferences = (0, import_api3.getPreferenceValues)();
  const [channels, setChannels] = (0, import_react.useState)([]);
  const [historyState, setHistoryState] = (0, import_react.useState)({ history: {} });
  const [query, setQuery] = (0, import_react.useState)("");
  const [filter, setFilter] = (0, import_react.useState)("all");
  const [isLoading, setIsLoading] = (0, import_react.useState)(true);
  const [error, setError] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    let canceled = false;
    async function bootstrap() {
      try {
        const loadedChannels = loadChannels(preferences.channelsPath || "~/channels.json");
        const loadedHistory = await loadHistory();
        if (!canceled) {
          setChannels(loadedChannels);
          setHistoryState(loadedHistory);
        }
      } catch (unknownError) {
        if (!canceled) setError(unknownError instanceof Error ? unknownError.message : String(unknownError));
      } finally {
        if (!canceled) setIsLoading(false);
      }
    }
    bootstrap();
    return () => {
      canceled = true;
    };
  }, [preferences.channelsPath]);
  const rankedChannels = (0, import_react.useMemo)(
    () => rankChannels(query, channels, historyState, filter, 200),
    [channels, filter, historyState, query]
  );
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.List, { filtering: false, searchText: query, onSearchTextChange: setQuery, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.List.EmptyView, { icon: import_api3.Icon.Warning, title: "Unable to Load Channels", description: error }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_api3.List,
    {
      isLoading,
      filtering: false,
      searchText: query,
      onSearchTextChange: setQuery,
      searchBarPlaceholder: "Search Discord",
      searchBarAccessory: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.List.Dropdown, { tooltip: "Filter", value: filter, onChange: (value) => setFilter(value), children: filters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.List.Dropdown.Item, { title: item.title, value: item.id }, item.id)) }),
      children: [
        rankedChannels.map((channel) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          ChannelItem,
          {
            channel,
            historyState,
            onHistoryChange: setHistoryState
          },
          channel.channelId
        )),
        !isLoading && rankedChannels.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.List.EmptyView, { icon: import_api3.Icon.MagnifyingGlass, title: "No Discord Channels Found" }) : null
      ]
    }
  );
}
function ChannelItem({
  channel,
  historyState,
  onHistoryChange
}) {
  const isFavorite = channel.history?.favorite === true;
  async function openChannel() {
    try {
      await openDiscordUrl(channel.url);
      onHistoryChange(await recordSelection(historyState, channel.channelId));
    } catch (error) {
      await (0, import_api3.showToast)({
        style: import_api3.Toast.Style.Failure,
        title: "Could not open Discord",
        message: error instanceof Error ? error.message : String(error)
      });
    }
  }
  async function toggleFavorite() {
    onHistoryChange(await setFavorite(historyState, channel.channelId, !isFavorite));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_api3.List.Item,
    {
      icon: iconForKind(channel.kind),
      title: channel.displayName,
      subtitle: subtitleForChannel(channel),
      accessories: accessoriesForChannel(channel),
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_api3.ActionPanel, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api3.Action, { title: "Open in Discord", icon: import_api3.Icon.ArrowRight, onAction: openChannel }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api3.Action,
          {
            title: isFavorite ? "Remove Favorite" : "Add Favorite",
            icon: isFavorite ? import_api3.Icon.StarDisabled : import_api3.Icon.Star,
            shortcut: { modifiers: ["cmd"], key: "f" },
            onAction: toggleFavorite
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api3.Action.CopyToClipboard,
          {
            title: "Copy Discord URL",
            content: channel.url,
            shortcut: { modifiers: ["shift"], key: "enter" }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_api3.Action.CopyToClipboard,
          {
            title: "Copy Channel ID",
            content: channel.channelId,
            shortcut: { modifiers: ["opt"], key: "enter" }
          }
        )
      ] })
    }
  );
}
function subtitleForChannel(channel) {
  return [labelForKind(channel.kind), channel.serverTag, channel.username].filter(Boolean).join(" \u2022 ");
}
function accessoriesForChannel(channel) {
  const accessories = [];
  if (channel.history?.favorite) accessories.push({ text: "Favorite", icon: { source: import_api3.Icon.Star, tintColor: import_api3.Color.Yellow } });
  if (channel.history?.lastOpened) accessories.push({ date: new Date(channel.history.lastOpened) });
  accessories.push({ tag: labelForKind(channel.kind) });
  return accessories;
}
function iconForKind(kind) {
  switch (kind) {
    case "dm":
      return import_api3.Icon.Person;
    case "group":
      return import_api3.Icon.TwoPeople;
    case "guild":
      return import_api3.Icon.Building;
    case "thread":
      return import_api3.Icon.SpeechBubble;
    case "voice":
      return import_api3.Icon.Microphone;
    case "forum":
      return import_api3.Icon.TextDocument;
    default:
      return import_api3.Icon.Hashtag;
  }
}
function labelForKind(kind) {
  switch (kind) {
    case "dm":
      return "DM";
    case "group":
      return "Group";
    case "guild":
      return "Server";
    case "thread":
      return "Thread";
    case "voice":
      return "Voice";
    case "forum":
      return "Forum";
    default:
      return "Channel";
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL2Rpc2NvcmQtcmF5Y2FzdC1zd2l0Y2hlci9zcmMvb3Blbi1kaXNjb3JkLWNoYW5uZWwudHN4IiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy9kaXNjb3JkLXJheWNhc3Qtc3dpdGNoZXIvc3JjL2NoYW5uZWwtbG9hZGVyLnRzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy9kaXNjb3JkLXJheWNhc3Qtc3dpdGNoZXIvc3JjL3R5cGVzLnRzIiwgIi4uLy4uLy4uLy4uLy5sb2NhbC9yZXBvcy9kaXNjb3JkLXJheWNhc3Qtc3dpdGNoZXIvc3JjL2hpc3Rvcnktc3RvcmUudHMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL2Rpc2NvcmQtcmF5Y2FzdC1zd2l0Y2hlci9zcmMvbGF1bmNoZXIudHMiLCAiLi4vLi4vLi4vLi4vLmxvY2FsL3JlcG9zL2Rpc2NvcmQtcmF5Y2FzdC1zd2l0Y2hlci9zcmMvc2VhcmNoLWVuZ2luZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25QYW5lbCxcbiAgQ29sb3IsXG4gIEljb24sXG4gIExpc3QsXG4gIFRvYXN0LFxuICBnZXRQcmVmZXJlbmNlVmFsdWVzLFxuICBzaG93VG9hc3Rcbn0gZnJvbSBcIkByYXljYXN0L2FwaVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbG9hZENoYW5uZWxzIH0gZnJvbSBcIi4vY2hhbm5lbC1sb2FkZXJcIjtcbmltcG9ydCB7IGxvYWRIaXN0b3J5LCByZWNvcmRTZWxlY3Rpb24sIHNldEZhdm9yaXRlIH0gZnJvbSBcIi4vaGlzdG9yeS1zdG9yZVwiO1xuaW1wb3J0IHsgb3BlbkRpc2NvcmRVcmwgfSBmcm9tIFwiLi9sYXVuY2hlclwiO1xuaW1wb3J0IHsgcmFua0NoYW5uZWxzIH0gZnJvbSBcIi4vc2VhcmNoLWVuZ2luZVwiO1xuaW1wb3J0IHsgRGlzY29yZENoYW5uZWwsIEhpc3RvcnlTdGF0ZSwgUmFua2VkQ2hhbm5lbCwgU2VhcmNoRmlsdGVyIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxudHlwZSBQcmVmZXJlbmNlcyA9IHtcbiAgY2hhbm5lbHNQYXRoPzogc3RyaW5nO1xufTtcblxuY29uc3QgZmlsdGVyczogeyBpZDogU2VhcmNoRmlsdGVyOyB0aXRsZTogc3RyaW5nIH1bXSA9IFtcbiAgeyBpZDogXCJhbGxcIiwgdGl0bGU6IFwiQWxsXCIgfSxcbiAgeyBpZDogXCJkbXNcIiwgdGl0bGU6IFwiRE1zXCIgfSxcbiAgeyBpZDogXCJzZXJ2ZXJzXCIsIHRpdGxlOiBcIlNlcnZlcnNcIiB9LFxuICB7IGlkOiBcInRocmVhZHNcIiwgdGl0bGU6IFwiVGhyZWFkc1wiIH0sXG4gIHsgaWQ6IFwiZmF2b3JpdGVzXCIsIHRpdGxlOiBcIkZhdm9yaXRlc1wiIH0sXG4gIHsgaWQ6IFwicmVjZW50XCIsIHRpdGxlOiBcIlJlY2VudFwiIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gIGNvbnN0IHByZWZlcmVuY2VzID0gZ2V0UHJlZmVyZW5jZVZhbHVlczxQcmVmZXJlbmNlcz4oKTtcbiAgY29uc3QgW2NoYW5uZWxzLCBzZXRDaGFubmVsc10gPSB1c2VTdGF0ZTxEaXNjb3JkQ2hhbm5lbFtdPihbXSk7XG4gIGNvbnN0IFtoaXN0b3J5U3RhdGUsIHNldEhpc3RvcnlTdGF0ZV0gPSB1c2VTdGF0ZTxIaXN0b3J5U3RhdGU+KHsgaGlzdG9yeToge30gfSk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxTZWFyY2hGaWx0ZXI+KFwiYWxsXCIpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGNhbmNlbGVkID0gZmFsc2U7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBib290c3RyYXAoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBsb2FkZWRDaGFubmVscyA9IGxvYWRDaGFubmVscyhwcmVmZXJlbmNlcy5jaGFubmVsc1BhdGggfHwgXCJ+L2NoYW5uZWxzLmpzb25cIik7XG4gICAgICAgIGNvbnN0IGxvYWRlZEhpc3RvcnkgPSBhd2FpdCBsb2FkSGlzdG9yeSgpO1xuICAgICAgICBpZiAoIWNhbmNlbGVkKSB7XG4gICAgICAgICAgc2V0Q2hhbm5lbHMobG9hZGVkQ2hhbm5lbHMpO1xuICAgICAgICAgIHNldEhpc3RvcnlTdGF0ZShsb2FkZWRIaXN0b3J5KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodW5rbm93bkVycm9yKSB7XG4gICAgICAgIGlmICghY2FuY2VsZWQpIHNldEVycm9yKHVua25vd25FcnJvciBpbnN0YW5jZW9mIEVycm9yID8gdW5rbm93bkVycm9yLm1lc3NhZ2UgOiBTdHJpbmcodW5rbm93bkVycm9yKSk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAoIWNhbmNlbGVkKSBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGJvb3RzdHJhcCgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxlZCA9IHRydWU7XG4gICAgfTtcbiAgfSwgW3ByZWZlcmVuY2VzLmNoYW5uZWxzUGF0aF0pO1xuXG4gIGNvbnN0IHJhbmtlZENoYW5uZWxzID0gdXNlTWVtbyhcbiAgICAoKSA9PiByYW5rQ2hhbm5lbHMocXVlcnksIGNoYW5uZWxzLCBoaXN0b3J5U3RhdGUsIGZpbHRlciwgMjAwKSxcbiAgICBbY2hhbm5lbHMsIGZpbHRlciwgaGlzdG9yeVN0YXRlLCBxdWVyeV1cbiAgKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3QgZmlsdGVyaW5nPXtmYWxzZX0gc2VhcmNoVGV4dD17cXVlcnl9IG9uU2VhcmNoVGV4dENoYW5nZT17c2V0UXVlcnl9PlxuICAgICAgICA8TGlzdC5FbXB0eVZpZXcgaWNvbj17SWNvbi5XYXJuaW5nfSB0aXRsZT1cIlVuYWJsZSB0byBMb2FkIENoYW5uZWxzXCIgZGVzY3JpcHRpb249e2Vycm9yfSAvPlxuICAgICAgPC9MaXN0PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaXN0XG4gICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgIGZpbHRlcmluZz17ZmFsc2V9XG4gICAgICBzZWFyY2hUZXh0PXtxdWVyeX1cbiAgICAgIG9uU2VhcmNoVGV4dENoYW5nZT17c2V0UXVlcnl9XG4gICAgICBzZWFyY2hCYXJQbGFjZWhvbGRlcj1cIlNlYXJjaCBEaXNjb3JkXCJcbiAgICAgIHNlYXJjaEJhckFjY2Vzc29yeT17XG4gICAgICAgIDxMaXN0LkRyb3Bkb3duIHRvb2x0aXA9XCJGaWx0ZXJcIiB2YWx1ZT17ZmlsdGVyfSBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRGaWx0ZXIodmFsdWUgYXMgU2VhcmNoRmlsdGVyKX0+XG4gICAgICAgICAge2ZpbHRlcnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8TGlzdC5Ecm9wZG93bi5JdGVtIGtleT17aXRlbS5pZH0gdGl0bGU9e2l0ZW0udGl0bGV9IHZhbHVlPXtpdGVtLmlkfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0xpc3QuRHJvcGRvd24+XG4gICAgICB9XG4gICAgPlxuICAgICAge3JhbmtlZENoYW5uZWxzLm1hcCgoY2hhbm5lbCkgPT4gKFxuICAgICAgICA8Q2hhbm5lbEl0ZW1cbiAgICAgICAgICBrZXk9e2NoYW5uZWwuY2hhbm5lbElkfVxuICAgICAgICAgIGNoYW5uZWw9e2NoYW5uZWx9XG4gICAgICAgICAgaGlzdG9yeVN0YXRlPXtoaXN0b3J5U3RhdGV9XG4gICAgICAgICAgb25IaXN0b3J5Q2hhbmdlPXtzZXRIaXN0b3J5U3RhdGV9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIHshaXNMb2FkaW5nICYmIHJhbmtlZENoYW5uZWxzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgPExpc3QuRW1wdHlWaWV3IGljb249e0ljb24uTWFnbmlmeWluZ0dsYXNzfSB0aXRsZT1cIk5vIERpc2NvcmQgQ2hhbm5lbHMgRm91bmRcIiAvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9MaXN0PlxuICApO1xufVxuXG5mdW5jdGlvbiBDaGFubmVsSXRlbSh7XG4gIGNoYW5uZWwsXG4gIGhpc3RvcnlTdGF0ZSxcbiAgb25IaXN0b3J5Q2hhbmdlXG59OiB7XG4gIGNoYW5uZWw6IFJhbmtlZENoYW5uZWw7XG4gIGhpc3RvcnlTdGF0ZTogSGlzdG9yeVN0YXRlO1xuICBvbkhpc3RvcnlDaGFuZ2U6IChzdGF0ZTogSGlzdG9yeVN0YXRlKSA9PiB2b2lkO1xufSkge1xuICBjb25zdCBpc0Zhdm9yaXRlID0gY2hhbm5lbC5oaXN0b3J5Py5mYXZvcml0ZSA9PT0gdHJ1ZTtcblxuICBhc3luYyBmdW5jdGlvbiBvcGVuQ2hhbm5lbCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgb3BlbkRpc2NvcmRVcmwoY2hhbm5lbC51cmwpO1xuICAgICAgb25IaXN0b3J5Q2hhbmdlKGF3YWl0IHJlY29yZFNlbGVjdGlvbihoaXN0b3J5U3RhdGUsIGNoYW5uZWwuY2hhbm5lbElkKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGF3YWl0IHNob3dUb2FzdCh7XG4gICAgICAgIHN0eWxlOiBUb2FzdC5TdHlsZS5GYWlsdXJlLFxuICAgICAgICB0aXRsZTogXCJDb3VsZCBub3Qgb3BlbiBEaXNjb3JkXCIsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGUoKSB7XG4gICAgb25IaXN0b3J5Q2hhbmdlKGF3YWl0IHNldEZhdm9yaXRlKGhpc3RvcnlTdGF0ZSwgY2hhbm5lbC5jaGFubmVsSWQsICFpc0Zhdm9yaXRlKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMaXN0Lkl0ZW1cbiAgICAgIGljb249e2ljb25Gb3JLaW5kKGNoYW5uZWwua2luZCl9XG4gICAgICB0aXRsZT17Y2hhbm5lbC5kaXNwbGF5TmFtZX1cbiAgICAgIHN1YnRpdGxlPXtzdWJ0aXRsZUZvckNoYW5uZWwoY2hhbm5lbCl9XG4gICAgICBhY2Nlc3Nvcmllcz17YWNjZXNzb3JpZXNGb3JDaGFubmVsKGNoYW5uZWwpfVxuICAgICAgYWN0aW9ucz17XG4gICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICA8QWN0aW9uIHRpdGxlPVwiT3BlbiBpbiBEaXNjb3JkXCIgaWNvbj17SWNvbi5BcnJvd1JpZ2h0fSBvbkFjdGlvbj17b3BlbkNoYW5uZWx9IC8+XG4gICAgICAgICAgPEFjdGlvblxuICAgICAgICAgICAgdGl0bGU9e2lzRmF2b3JpdGUgPyBcIlJlbW92ZSBGYXZvcml0ZVwiIDogXCJBZGQgRmF2b3JpdGVcIn1cbiAgICAgICAgICAgIGljb249e2lzRmF2b3JpdGUgPyBJY29uLlN0YXJEaXNhYmxlZCA6IEljb24uU3Rhcn1cbiAgICAgICAgICAgIHNob3J0Y3V0PXt7IG1vZGlmaWVyczogW1wiY21kXCJdLCBrZXk6IFwiZlwiIH19XG4gICAgICAgICAgICBvbkFjdGlvbj17dG9nZ2xlRmF2b3JpdGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QWN0aW9uLkNvcHlUb0NsaXBib2FyZFxuICAgICAgICAgICAgdGl0bGU9XCJDb3B5IERpc2NvcmQgVVJMXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e2NoYW5uZWwudXJsfVxuICAgICAgICAgICAgc2hvcnRjdXQ9e3sgbW9kaWZpZXJzOiBbXCJzaGlmdFwiXSwga2V5OiBcImVudGVyXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxBY3Rpb24uQ29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgICB0aXRsZT1cIkNvcHkgQ2hhbm5lbCBJRFwiXG4gICAgICAgICAgICBjb250ZW50PXtjaGFubmVsLmNoYW5uZWxJZH1cbiAgICAgICAgICAgIHNob3J0Y3V0PXt7IG1vZGlmaWVyczogW1wib3B0XCJdLCBrZXk6IFwiZW50ZXJcIiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQWN0aW9uUGFuZWw+XG4gICAgICB9XG4gICAgLz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gc3VidGl0bGVGb3JDaGFubmVsKGNoYW5uZWw6IERpc2NvcmRDaGFubmVsKTogc3RyaW5nIHtcbiAgcmV0dXJuIFtsYWJlbEZvcktpbmQoY2hhbm5lbC5raW5kKSwgY2hhbm5lbC5zZXJ2ZXJUYWcsIGNoYW5uZWwudXNlcm5hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFx1MjAyMiBcIik7XG59XG5cbmZ1bmN0aW9uIGFjY2Vzc29yaWVzRm9yQ2hhbm5lbChjaGFubmVsOiBSYW5rZWRDaGFubmVsKTogTGlzdC5JdGVtLkFjY2Vzc29yeVtdIHtcbiAgY29uc3QgYWNjZXNzb3JpZXM6IExpc3QuSXRlbS5BY2Nlc3NvcnlbXSA9IFtdO1xuICBpZiAoY2hhbm5lbC5oaXN0b3J5Py5mYXZvcml0ZSkgYWNjZXNzb3JpZXMucHVzaCh7IHRleHQ6IFwiRmF2b3JpdGVcIiwgaWNvbjogeyBzb3VyY2U6IEljb24uU3RhciwgdGludENvbG9yOiBDb2xvci5ZZWxsb3cgfSB9KTtcbiAgaWYgKGNoYW5uZWwuaGlzdG9yeT8ubGFzdE9wZW5lZCkgYWNjZXNzb3JpZXMucHVzaCh7IGRhdGU6IG5ldyBEYXRlKGNoYW5uZWwuaGlzdG9yeS5sYXN0T3BlbmVkKSB9KTtcbiAgYWNjZXNzb3JpZXMucHVzaCh7IHRhZzogbGFiZWxGb3JLaW5kKGNoYW5uZWwua2luZCkgfSk7XG4gIHJldHVybiBhY2Nlc3Nvcmllcztcbn1cblxuZnVuY3Rpb24gaWNvbkZvcktpbmQoa2luZDogRGlzY29yZENoYW5uZWxbXCJraW5kXCJdKTogTGlzdC5JdGVtLlByb3BzW1wiaWNvblwiXSB7XG4gIHN3aXRjaCAoa2luZCkge1xuICAgIGNhc2UgXCJkbVwiOlxuICAgICAgcmV0dXJuIEljb24uUGVyc29uO1xuICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgcmV0dXJuIEljb24uVHdvUGVvcGxlO1xuICAgIGNhc2UgXCJndWlsZFwiOlxuICAgICAgcmV0dXJuIEljb24uQnVpbGRpbmc7XG4gICAgY2FzZSBcInRocmVhZFwiOlxuICAgICAgcmV0dXJuIEljb24uU3BlZWNoQnViYmxlO1xuICAgIGNhc2UgXCJ2b2ljZVwiOlxuICAgICAgcmV0dXJuIEljb24uTWljcm9waG9uZTtcbiAgICBjYXNlIFwiZm9ydW1cIjpcbiAgICAgIHJldHVybiBJY29uLlRleHREb2N1bWVudDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIEljb24uSGFzaHRhZztcbiAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbEZvcktpbmQoa2luZDogRGlzY29yZENoYW5uZWxbXCJraW5kXCJdKTogc3RyaW5nIHtcbiAgc3dpdGNoIChraW5kKSB7XG4gICAgY2FzZSBcImRtXCI6XG4gICAgICByZXR1cm4gXCJETVwiO1xuICAgIGNhc2UgXCJncm91cFwiOlxuICAgICAgcmV0dXJuIFwiR3JvdXBcIjtcbiAgICBjYXNlIFwiZ3VpbGRcIjpcbiAgICAgIHJldHVybiBcIlNlcnZlclwiO1xuICAgIGNhc2UgXCJ0aHJlYWRcIjpcbiAgICAgIHJldHVybiBcIlRocmVhZFwiO1xuICAgIGNhc2UgXCJ2b2ljZVwiOlxuICAgICAgcmV0dXJuIFwiVm9pY2VcIjtcbiAgICBjYXNlIFwiZm9ydW1cIjpcbiAgICAgIHJldHVybiBcIkZvcnVtXCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIkNoYW5uZWxcIjtcbiAgfVxufVxuIiwgImltcG9ydCB7IGV4aXN0c1N5bmMsIHJlYWRGaWxlU3luYywgc3RhdFN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGhvbWVkaXIgfSBmcm9tIFwib3NcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY2hhbm5lbEtpbmRzLCBEaXNjb3JkQ2hhbm5lbCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbnR5cGUgQ2FjaGUgPSB7XG4gIHBhdGg6IHN0cmluZztcbiAgbXRpbWVNczogbnVtYmVyO1xuICBjaGFubmVsczogRGlzY29yZENoYW5uZWxbXTtcbn07XG5cbmxldCBjYWNoZTogQ2FjaGUgfCB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChwYXRoID09PSBcIn5cIikge1xuICAgIHJldHVybiBob21lZGlyKCk7XG4gIH1cblxuICBpZiAocGF0aC5zdGFydHNXaXRoKFwifi9cIikpIHtcbiAgICByZXR1cm4gcmVzb2x2ZShob21lZGlyKCksIHBhdGguc2xpY2UoMikpO1xuICB9XG5cbiAgcmV0dXJuIHJlc29sdmUocGF0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ2hhbm5lbHMocGF0aDogc3RyaW5nKTogRGlzY29yZENoYW5uZWxbXSB7XG4gIGNvbnN0IGV4cGFuZGVkUGF0aCA9IGV4cGFuZFBhdGgocGF0aCk7XG5cbiAgaWYgKCFleGlzdHNTeW5jKGV4cGFuZGVkUGF0aCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENoYW5uZWxzIGZpbGUgbm90IGZvdW5kOiAke2V4cGFuZGVkUGF0aH1gKTtcbiAgfVxuXG4gIGNvbnN0IHN0YXRzID0gc3RhdFN5bmMoZXhwYW5kZWRQYXRoKTtcbiAgaWYgKGNhY2hlPy5wYXRoID09PSBleHBhbmRlZFBhdGggJiYgY2FjaGUubXRpbWVNcyA9PT0gc3RhdHMubXRpbWVNcykge1xuICAgIHJldHVybiBjYWNoZS5jaGFubmVscztcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZDogdW5rbm93biA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKGV4cGFuZGVkUGF0aCwgXCJ1dGY4XCIpKTtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDaGFubmVscyBKU09OIG11c3QgYmUgYW4gYXJyYXkuXCIpO1xuICB9XG5cbiAgY29uc3QgY2hhbm5lbHMgPSBwYXJzZWQubWFwKHZhbGlkYXRlQ2hhbm5lbCk7XG4gIGNhY2hlID0geyBwYXRoOiBleHBhbmRlZFBhdGgsIG10aW1lTXM6IHN0YXRzLm10aW1lTXMsIGNoYW5uZWxzIH07XG4gIHJldHVybiBjaGFubmVscztcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGFubmVsKHZhbHVlOiB1bmtub3duLCBpbmRleDogbnVtYmVyKTogRGlzY29yZENoYW5uZWwge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2hhbm5lbCBhdCBpbmRleCAke2luZGV4fSBtdXN0IGJlIGFuIG9iamVjdC5gKTtcbiAgfVxuXG4gIGNvbnN0IGl0ZW0gPSB2YWx1ZSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgY29uc3Qga2luZCA9IHJlYWRTdHJpbmcoaXRlbS5raW5kLCBcImtpbmRcIiwgaW5kZXgpO1xuICBpZiAoIWNoYW5uZWxLaW5kcy5pbmNsdWRlcyhraW5kIGFzIERpc2NvcmRDaGFubmVsW1wia2luZFwiXSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENoYW5uZWwgYXQgaW5kZXggJHtpbmRleH0gaGFzIGFuIHVuc3VwcG9ydGVkIGtpbmQ6ICR7a2luZH1gKTtcbiAgfVxuICBjb25zdCBjaGFubmVsSWQgPSByZWFkU3RyaW5nKGl0ZW0uY2hhbm5lbElkLCBcImNoYW5uZWxJZFwiLCBpbmRleCk7XG4gIGNvbnN0IGNoYW5uZWxOYW1lID0gcmVhZE9wdGlvbmFsU3RyaW5nKGl0ZW0uY2hhbm5lbE5hbWUpO1xuICBjb25zdCBndWlsZE5hbWUgPSByZWFkT3B0aW9uYWxTdHJpbmcoaXRlbS5ndWlsZE5hbWUpO1xuICBjb25zdCBjYXRlZ29yeU5hbWUgPSByZWFkT3B0aW9uYWxTdHJpbmcoaXRlbS5jYXRlZ29yeU5hbWUpO1xuXG4gIHJldHVybiB7XG4gICAga2luZDoga2luZCBhcyBEaXNjb3JkQ2hhbm5lbFtcImtpbmRcIl0sXG4gICAgY2hhbm5lbElkLFxuICAgIHVzZXJJZDogcmVhZE51bGxhYmxlU3RyaW5nKGl0ZW0udXNlcklkLCBcInVzZXJJZFwiLCBpbmRleCksXG4gICAgZGlzcGxheU5hbWU6XG4gICAgICByZWFkT3B0aW9uYWxTdHJpbmcoaXRlbS5kaXNwbGF5TmFtZSkgPz9cbiAgICAgIGZvcm1hdENoYW5uZWxOYW1lKGNoYW5uZWxOYW1lKSA/P1xuICAgICAgcmVhZE9wdGlvbmFsU3RyaW5nKGl0ZW0udXNlcm5hbWUpID8/XG4gICAgICBndWlsZE5hbWUgPz9cbiAgICAgIGBDaGFubmVsICR7Y2hhbm5lbElkfWAsXG4gICAgdXNlcm5hbWU6IHJlYWROdWxsYWJsZVN0cmluZyhpdGVtLnVzZXJuYW1lLCBcInVzZXJuYW1lXCIsIGluZGV4KSxcbiAgICBzZXJ2ZXJUYWc6IHJlYWROdWxsYWJsZVN0cmluZyhpdGVtLnNlcnZlclRhZywgXCJzZXJ2ZXJUYWdcIiwgaW5kZXgpID8/IGZvcm1hdFNlcnZlckNvbnRleHQoZ3VpbGROYW1lLCBjYXRlZ29yeU5hbWUpLFxuICAgIHNlcnZlcklkOiByZWFkTnVsbGFibGVTdHJpbmcoaXRlbS5zZXJ2ZXJJZCwgXCJzZXJ2ZXJJZFwiLCBpbmRleCkgPz8gcmVhZE51bGxhYmxlU3RyaW5nKGl0ZW0uZ3VpbGRJZCwgXCJndWlsZElkXCIsIGluZGV4KSxcbiAgICBzZWFyY2g6IHJlYWRPcHRpb25hbFN0cmluZyhpdGVtLnNlYXJjaCk/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIixcbiAgICB1cmw6IHJlYWRTdHJpbmcoaXRlbS51cmwsIFwidXJsXCIsIGluZGV4KVxuICB9O1xufVxuXG5mdW5jdGlvbiByZWFkU3RyaW5nKHZhbHVlOiB1bmtub3duLCBmaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENoYW5uZWwgYXQgaW5kZXggJHtpbmRleH0gbmVlZHMgYSBub24tZW1wdHkgJHtmaWVsZH0uYCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHJlYWROdWxsYWJsZVN0cmluZyh2YWx1ZTogdW5rbm93biwgZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB8IG51bGwge1xuICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2hhbm5lbCBhdCBpbmRleCAke2luZGV4fSBoYXMgaW52YWxpZCAke2ZpZWxkfS5gKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcmVhZE9wdGlvbmFsU3RyaW5nKHZhbHVlOiB1bmtub3duKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCB0cmltbWVkID0gdmFsdWUudHJpbSgpO1xuICByZXR1cm4gdHJpbW1lZC5sZW5ndGggPiAwID8gdHJpbW1lZCA6IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Q2hhbm5lbE5hbWUoY2hhbm5lbE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gIGlmICghY2hhbm5lbE5hbWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIGNoYW5uZWxOYW1lLnN0YXJ0c1dpdGgoXCIjXCIpID8gY2hhbm5lbE5hbWUgOiBgIyR7Y2hhbm5lbE5hbWV9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U2VydmVyQ29udGV4dChndWlsZE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCwgY2F0ZWdvcnlOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBzdHJpbmcgfCBudWxsIHtcbiAgcmV0dXJuIFtndWlsZE5hbWUsIGNhdGVnb3J5TmFtZV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXHUyMDIyIFwiKSB8fCBudWxsO1xufVxuIiwgImV4cG9ydCBjb25zdCBjaGFubmVsS2luZHMgPSBbXCJkbVwiLCBcImdyb3VwXCIsIFwiZ3VpbGRcIiwgXCJjaGFubmVsXCIsIFwidGhyZWFkXCIsIFwidm9pY2VcIiwgXCJmb3J1bVwiXSBhcyBjb25zdDtcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbEtpbmQgPSAodHlwZW9mIGNoYW5uZWxLaW5kcylbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgRGlzY29yZENoYW5uZWwgPSB7XG4gIGtpbmQ6IENoYW5uZWxLaW5kO1xuICBjaGFubmVsSWQ6IHN0cmluZztcbiAgdXNlcklkOiBzdHJpbmcgfCBudWxsO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgc2VydmVyVGFnOiBzdHJpbmcgfCBudWxsO1xuICBzZXJ2ZXJJZDogc3RyaW5nIHwgbnVsbDtcbiAgc2VhcmNoOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQ2hhbm5lbEhpc3RvcnkgPSB7XG4gIGNvdW50OiBudW1iZXI7XG4gIGxhc3RPcGVuZWQ6IG51bWJlcjtcbiAgcm9sbGluZ1Njb3JlOiBudW1iZXI7XG4gIGZhdm9yaXRlOiBib29sZWFuO1xuICBoaWRkZW4/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgSGlzdG9yeVN0YXRlID0ge1xuICBoaXN0b3J5OiBSZWNvcmQ8c3RyaW5nLCBDaGFubmVsSGlzdG9yeT47XG59O1xuXG5leHBvcnQgdHlwZSBTZWFyY2hGaWx0ZXIgPSBcImFsbFwiIHwgXCJkbXNcIiB8IFwic2VydmVyc1wiIHwgXCJ0aHJlYWRzXCIgfCBcImZhdm9yaXRlc1wiIHwgXCJyZWNlbnRcIjtcblxuZXhwb3J0IHR5cGUgUmFua2VkQ2hhbm5lbCA9IERpc2NvcmRDaGFubmVsICYge1xuICBzY29yZTogbnVtYmVyO1xuICBoaXN0b3J5PzogQ2hhbm5lbEhpc3Rvcnk7XG59O1xuIiwgImltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcbmltcG9ydCB7IENoYW5uZWxIaXN0b3J5LCBIaXN0b3J5U3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBzdG9yYWdlS2V5ID0gXCJkaXNjb3JkLXF1aWNrLXN3aXRjaGVyLWhpc3RvcnlcIjtcbmNvbnN0IGhhbGZMaWZlRGF5cyA9IDIxO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEhpc3RvcnkoKTogUHJvbWlzZTxIaXN0b3J5U3RhdGU+IHtcbiAgY29uc3Qgc3RvcmVkID0gYXdhaXQgTG9jYWxTdG9yYWdlLmdldEl0ZW08c3RyaW5nPihzdG9yYWdlS2V5KTtcbiAgaWYgKCFzdG9yZWQpIHtcbiAgICByZXR1cm4geyBoaXN0b3J5OiB7fSB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHN0b3JlZCkgYXMgSGlzdG9yeVN0YXRlO1xuICAgIHJldHVybiB7IGhpc3Rvcnk6IHBhcnNlZC5oaXN0b3J5ID8/IHt9IH07XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB7IGhpc3Rvcnk6IHt9IH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY29yZFNlbGVjdGlvbihzdGF0ZTogSGlzdG9yeVN0YXRlLCBjaGFubmVsSWQ6IHN0cmluZyk6IFByb21pc2U8SGlzdG9yeVN0YXRlPiB7XG4gIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gIGNvbnN0IHByZXZpb3VzID0gc3RhdGUuaGlzdG9yeVtjaGFubmVsSWRdO1xuICBjb25zdCBuZXh0OiBDaGFubmVsSGlzdG9yeSA9IHtcbiAgICBjb3VudDogKHByZXZpb3VzPy5jb3VudCA/PyAwKSArIDEsXG4gICAgbGFzdE9wZW5lZDogbm93LFxuICAgIHJvbGxpbmdTY29yZTogZGVjYXllZFNjb3JlKHByZXZpb3VzLCBub3cpICsgMSxcbiAgICBmYXZvcml0ZTogcHJldmlvdXM/LmZhdm9yaXRlID8/IGZhbHNlLFxuICAgIGhpZGRlbjogcHJldmlvdXM/LmhpZGRlblxuICB9O1xuXG4gIGNvbnN0IG5leHRTdGF0ZSA9IHsgaGlzdG9yeTogeyAuLi5zdGF0ZS5oaXN0b3J5LCBbY2hhbm5lbElkXTogbmV4dCB9IH07XG4gIGF3YWl0IHNhdmVIaXN0b3J5KG5leHRTdGF0ZSk7XG4gIHJldHVybiBuZXh0U3RhdGU7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRGYXZvcml0ZShzdGF0ZTogSGlzdG9yeVN0YXRlLCBjaGFubmVsSWQ6IHN0cmluZywgZmF2b3JpdGU6IGJvb2xlYW4pOiBQcm9taXNlPEhpc3RvcnlTdGF0ZT4ge1xuICBjb25zdCBwcmV2aW91cyA9IHN0YXRlLmhpc3RvcnlbY2hhbm5lbElkXTtcbiAgY29uc3QgbmV4dFN0YXRlID0ge1xuICAgIGhpc3Rvcnk6IHtcbiAgICAgIC4uLnN0YXRlLmhpc3RvcnksXG4gICAgICBbY2hhbm5lbElkXToge1xuICAgICAgICBjb3VudDogcHJldmlvdXM/LmNvdW50ID8/IDAsXG4gICAgICAgIGxhc3RPcGVuZWQ6IHByZXZpb3VzPy5sYXN0T3BlbmVkID8/IDAsXG4gICAgICAgIHJvbGxpbmdTY29yZTogcHJldmlvdXM/LnJvbGxpbmdTY29yZSA/PyAwLFxuICAgICAgICBoaWRkZW46IHByZXZpb3VzPy5oaWRkZW4sXG4gICAgICAgIGZhdm9yaXRlXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGF3YWl0IHNhdmVIaXN0b3J5KG5leHRTdGF0ZSk7XG4gIHJldHVybiBuZXh0U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNlbmN5U2NvcmUoaGlzdG9yeTogQ2hhbm5lbEhpc3RvcnkgfCB1bmRlZmluZWQsIG5vdyA9IERhdGUubm93KCkpOiBudW1iZXIge1xuICByZXR1cm4gZGVjYXllZFNjb3JlKGhpc3RvcnksIG5vdyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVIaXN0b3J5KHN0YXRlOiBIaXN0b3J5U3RhdGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgTG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbn1cblxuZnVuY3Rpb24gZGVjYXllZFNjb3JlKGhpc3Rvcnk6IENoYW5uZWxIaXN0b3J5IHwgdW5kZWZpbmVkLCBub3c6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICghaGlzdG9yeT8ubGFzdE9wZW5lZCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgY29uc3QgYWdlRGF5cyA9IE1hdGgubWF4KDAsIG5vdyAtIGhpc3RvcnkubGFzdE9wZW5lZCkgLyA4Nl80MDBfMDAwO1xuICByZXR1cm4gKGhpc3Rvcnkucm9sbGluZ1Njb3JlIHx8IGhpc3RvcnkuY291bnQgfHwgMCkgKiBNYXRoLnBvdygwLjUsIGFnZURheXMgLyBoYWxmTGlmZURheXMpO1xufVxuIiwgImltcG9ydCB7IFBvcFRvUm9vdFR5cGUsIGNsb3NlTWFpbldpbmRvdywgb3BlbiB9IGZyb20gXCJAcmF5Y2FzdC9hcGlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG9wZW5EaXNjb3JkVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGF3YWl0IG9wZW4odXJsKTtcbiAgYXdhaXQgY2xvc2VNYWluV2luZG93KHsgY2xlYXJSb290U2VhcmNoOiB0cnVlLCBwb3BUb1Jvb3RUeXBlOiBQb3BUb1Jvb3RUeXBlLkltbWVkaWF0ZSB9KTtcbn1cbiIsICJpbXBvcnQgeyByZWNlbmN5U2NvcmUgfSBmcm9tIFwiLi9oaXN0b3J5LXN0b3JlXCI7XG5pbXBvcnQgeyBEaXNjb3JkQ2hhbm5lbCwgSGlzdG9yeVN0YXRlLCBSYW5rZWRDaGFubmVsLCBTZWFyY2hGaWx0ZXIgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5jb25zdCBmYXZvcml0ZUJvbnVzID0gOTAwO1xuY29uc3QgcmVjZW50VGhyZXNob2xkTXMgPSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5rQ2hhbm5lbHMoXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIGNoYW5uZWxzOiBEaXNjb3JkQ2hhbm5lbFtdLFxuICBoaXN0b3J5U3RhdGU6IEhpc3RvcnlTdGF0ZSxcbiAgZmlsdGVyOiBTZWFyY2hGaWx0ZXIgPSBcImFsbFwiLFxuICBsaW1pdCA9IDEwMFxuKTogUmFua2VkQ2hhbm5lbFtdIHtcbiAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gbm9ybWFsaXplKHF1ZXJ5KTtcbiAgY29uc3QgcXVlcnlUb2tlbnMgPSB0b2tlbml6ZShub3JtYWxpemVkUXVlcnkpO1xuICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuXG4gIHJldHVybiBjaGFubmVsc1xuICAgIC5tYXAoKGNoYW5uZWwpID0+IHtcbiAgICAgIGNvbnN0IGhpc3RvcnkgPSBoaXN0b3J5U3RhdGUuaGlzdG9yeVtjaGFubmVsLmNoYW5uZWxJZF07XG4gICAgICByZXR1cm4geyAuLi5jaGFubmVsLCBoaXN0b3J5LCBzY29yZTogc2NvcmVDaGFubmVsKGNoYW5uZWwsIG5vcm1hbGl6ZWRRdWVyeSwgcXVlcnlUb2tlbnMsIGhpc3RvcnlTdGF0ZSwgbm93KSB9O1xuICAgIH0pXG4gICAgLmZpbHRlcigoY2hhbm5lbCkgPT4gbWF0Y2hlc0ZpbHRlcihjaGFubmVsLCBmaWx0ZXIsIG5vdykpXG4gICAgLmZpbHRlcigoY2hhbm5lbCkgPT4gIWNoYW5uZWwuaGlzdG9yeT8uaGlkZGVuKVxuICAgIC5maWx0ZXIoKGNoYW5uZWwpID0+IG5vcm1hbGl6ZWRRdWVyeS5sZW5ndGggPiAwIHx8IHdhc1ByZXZpb3VzbHlPcGVuZWQoY2hhbm5lbCkpXG4gICAgLmZpbHRlcigoY2hhbm5lbCkgPT4gbm9ybWFsaXplZFF1ZXJ5Lmxlbmd0aCA9PT0gMCB8fCBjaGFubmVsLnNjb3JlID4gMClcbiAgICAuc29ydCgoYSwgYikgPT4gYi5zY29yZSAtIGEuc2NvcmUgfHwgYS5kaXNwbGF5TmFtZS5sb2NhbGVDb21wYXJlKGIuZGlzcGxheU5hbWUpKVxuICAgIC5zbGljZSgwLCBsaW1pdCk7XG59XG5cbmZ1bmN0aW9uIHdhc1ByZXZpb3VzbHlPcGVuZWQoY2hhbm5lbDogUmFua2VkQ2hhbm5lbCk6IGJvb2xlYW4ge1xuICByZXR1cm4gQm9vbGVhbihjaGFubmVsLmhpc3Rvcnk/Lmxhc3RPcGVuZWQgfHwgY2hhbm5lbC5oaXN0b3J5Py5jb3VudCk7XG59XG5cbmZ1bmN0aW9uIHNjb3JlQ2hhbm5lbChcbiAgY2hhbm5lbDogRGlzY29yZENoYW5uZWwsXG4gIHF1ZXJ5OiBzdHJpbmcsXG4gIHF1ZXJ5VG9rZW5zOiBzdHJpbmdbXSxcbiAgaGlzdG9yeVN0YXRlOiBIaXN0b3J5U3RhdGUsXG4gIG5vdzogbnVtYmVyXG4pOiBudW1iZXIge1xuICBjb25zdCBoaXN0b3J5ID0gaGlzdG9yeVN0YXRlLmhpc3RvcnlbY2hhbm5lbC5jaGFubmVsSWRdO1xuICBjb25zdCBoYXlzdGFjayA9IG5vcm1hbGl6ZShjaGFubmVsLnNlYXJjaCk7XG4gIGNvbnN0IGRpc3BsYXlOYW1lID0gbm9ybWFsaXplKGNoYW5uZWwuZGlzcGxheU5hbWUpO1xuICBjb25zdCB0b2tlbnMgPSB0b2tlbml6ZShoYXlzdGFjayk7XG5cbiAgbGV0IHNjb3JlID0gcXVlcnkgPyAwIDogNTA7XG5cbiAgaWYgKHF1ZXJ5KSB7XG4gICAgaWYgKGRpc3BsYXlOYW1lID09PSBxdWVyeSB8fCBoYXlzdGFjayA9PT0gcXVlcnkpIHNjb3JlICs9IDEwXzAwMDtcbiAgICBpZiAoZGlzcGxheU5hbWUuc3RhcnRzV2l0aChxdWVyeSkpIHNjb3JlICs9IDhfMDAwO1xuICAgIGlmIChoYXlzdGFjay5zdGFydHNXaXRoKHF1ZXJ5KSkgc2NvcmUgKz0gNl8wMDA7XG4gICAgaWYgKHRva2Vucy5zb21lKCh0b2tlbikgPT4gdG9rZW4uc3RhcnRzV2l0aChxdWVyeSkpKSBzY29yZSArPSA0XzUwMDtcbiAgICBpZiAoaGF5c3RhY2suaW5jbHVkZXMocXVlcnkpKSBzY29yZSArPSAyXzAwMDtcbiAgICBpZiAoYWNyb255bSh0b2tlbnMpLnN0YXJ0c1dpdGgocXVlcnkpKSBzY29yZSArPSAxXzYwMDtcbiAgICBzY29yZSArPSBxdWVyeVRva2Vucy5ldmVyeSgodG9rZW4pID0+IHRva2Vucy5zb21lKChzZWFyY2hUb2tlbikgPT4gc2VhcmNoVG9rZW4uc3RhcnRzV2l0aCh0b2tlbikpKSA/IDFfMjAwIDogMDtcbiAgICBzY29yZSArPSBmdXp6eVNjb3JlKHF1ZXJ5LCBoYXlzdGFjayk7XG4gIH1cblxuICBzY29yZSArPSByZWNlbmN5U2NvcmUoaGlzdG9yeSwgbm93KSAqIDMwMDtcbiAgaWYgKGhpc3Rvcnk/LmZhdm9yaXRlKSBzY29yZSArPSBmYXZvcml0ZUJvbnVzO1xuICBzY29yZSAtPSBNYXRoLm1pbihkaXNwbGF5TmFtZS5sZW5ndGgsIDgwKSAqIDM7XG5cbiAgcmV0dXJuIHNjb3JlO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVzRmlsdGVyKGNoYW5uZWw6IFJhbmtlZENoYW5uZWwsIGZpbHRlcjogU2VhcmNoRmlsdGVyLCBub3c6IG51bWJlcik6IGJvb2xlYW4ge1xuICBzd2l0Y2ggKGZpbHRlcikge1xuICAgIGNhc2UgXCJkbXNcIjpcbiAgICAgIHJldHVybiBjaGFubmVsLmtpbmQgPT09IFwiZG1cIiB8fCBjaGFubmVsLmtpbmQgPT09IFwiZ3JvdXBcIjtcbiAgICBjYXNlIFwic2VydmVyc1wiOlxuICAgICAgcmV0dXJuIGNoYW5uZWwua2luZCA9PT0gXCJndWlsZFwiIHx8IGNoYW5uZWwua2luZCA9PT0gXCJjaGFubmVsXCIgfHwgY2hhbm5lbC5raW5kID09PSBcInZvaWNlXCIgfHwgY2hhbm5lbC5raW5kID09PSBcImZvcnVtXCI7XG4gICAgY2FzZSBcInRocmVhZHNcIjpcbiAgICAgIHJldHVybiBjaGFubmVsLmtpbmQgPT09IFwidGhyZWFkXCI7XG4gICAgY2FzZSBcImZhdm9yaXRlc1wiOlxuICAgICAgcmV0dXJuIGNoYW5uZWwuaGlzdG9yeT8uZmF2b3JpdGUgPT09IHRydWU7XG4gICAgY2FzZSBcInJlY2VudFwiOlxuICAgICAgcmV0dXJuIEJvb2xlYW4oY2hhbm5lbC5oaXN0b3J5Py5sYXN0T3BlbmVkICYmIG5vdyAtIGNoYW5uZWwuaGlzdG9yeS5sYXN0T3BlbmVkIDwgcmVjZW50VGhyZXNob2xkTXMpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmdXp6eVNjb3JlKHF1ZXJ5OiBzdHJpbmcsIHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gIGxldCBxdWVyeUluZGV4ID0gMDtcbiAgbGV0IHNjb3JlID0gMDtcbiAgbGV0IHN0cmVhayA9IDA7XG5cbiAgZm9yIChsZXQgdGV4dEluZGV4ID0gMDsgdGV4dEluZGV4IDwgdGV4dC5sZW5ndGggJiYgcXVlcnlJbmRleCA8IHF1ZXJ5Lmxlbmd0aDsgdGV4dEluZGV4ICs9IDEpIHtcbiAgICBpZiAodGV4dFt0ZXh0SW5kZXhdICE9PSBxdWVyeVtxdWVyeUluZGV4XSkge1xuICAgICAgc3RyZWFrID0gMDtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHNjb3JlICs9IDEyMCArIHN0cmVhayAqIDgwO1xuICAgIGlmICh0ZXh0SW5kZXggPT09IDAgfHwgdGV4dFt0ZXh0SW5kZXggLSAxXSA9PT0gXCIgXCIpIHNjb3JlICs9IDEyMDtcbiAgICBzdHJlYWsgKz0gMTtcbiAgICBxdWVyeUluZGV4ICs9IDE7XG4gIH1cblxuICByZXR1cm4gcXVlcnlJbmRleCA9PT0gcXVlcnkubGVuZ3RoID8gc2NvcmUgOiAwO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbn1cblxuZnVuY3Rpb24gdG9rZW5pemUodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC9bXmEtejAtOV8jIV0rLykuZmlsdGVyKEJvb2xlYW4pO1xufVxuXG5mdW5jdGlvbiBhY3JvbnltKHRva2Vuczogc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gdG9rZW5zLm1hcCgodG9rZW4pID0+IHRva2VuWzBdKS5qb2luKFwiXCIpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBQUEsY0FTTztBQUNQLG1CQUE2Qzs7O0FDVjdDLGdCQUFtRDtBQUNuRCxnQkFBd0I7QUFDeEIsa0JBQXdCOzs7QUNGakIsSUFBTSxlQUFlLENBQUMsTUFBTSxTQUFTLFNBQVMsV0FBVyxVQUFVLFNBQVMsT0FBTzs7O0FEVzFGLElBQUk7QUFFRyxTQUFTLFdBQVcsTUFBc0I7QUFDL0MsTUFBSSxTQUFTLEtBQUs7QUFDaEIsZUFBTyxtQkFBUTtBQUFBLEVBQ2pCO0FBRUEsTUFBSSxLQUFLLFdBQVcsSUFBSSxHQUFHO0FBQ3pCLGVBQU8seUJBQVEsbUJBQVEsR0FBRyxLQUFLLE1BQU0sQ0FBQyxDQUFDO0FBQUEsRUFDekM7QUFFQSxhQUFPLHFCQUFRLElBQUk7QUFDckI7QUFFTyxTQUFTLGFBQWEsTUFBZ0M7QUFDM0QsUUFBTSxlQUFlLFdBQVcsSUFBSTtBQUVwQyxNQUFJLEtBQUMsc0JBQVcsWUFBWSxHQUFHO0FBQzdCLFVBQU0sSUFBSSxNQUFNLDRCQUE0QixZQUFZLEVBQUU7QUFBQSxFQUM1RDtBQUVBLFFBQU0sWUFBUSxvQkFBUyxZQUFZO0FBQ25DLE1BQUksT0FBTyxTQUFTLGdCQUFnQixNQUFN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QUs7QUFBQSxZQUM1QyxVQUFVLEVBQUUsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUk7QUFBQSxZQUN6QyxVQUFVO0FBQUE7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLFVBQUMsbUJBQU87QUFBQSxVQUFQO0FBQUEsWUFDQyxPQUFNO0FBQUEsWUFDTixTQUFTLFFBQVE7QUFBQSxZQUNqQixVQUFVLEVBQUUsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLFFBQVE7QUFBQTtBQUFBLFFBQ2pEO0FBQUEsUUFDQTtBQUFBLFVBQUMsbUJBQU87QUFBQSxVQUFQO0FBQUEsWUFDQyxPQUFNO0FBQUEsWUFDTixTQUFTLFFBQVE7QUFBQSxZQUNqQixVQUFVLEVBQUUsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLFFBQVE7QUFBQTtBQUFBLFFBQy9DO0FBQUEsU0FDRjtBQUFBO0FBQUEsRUFFSjtBQUVKO0FBRUEsU0FBUyxtQkFBbUIsU0FBaUM7QUFDM0QsU0FBTyxDQUFDLGFBQWEsUUFBUSxJQUFJLEdBQUcsUUFBUSxXQUFXLFFBQVEsUUFBUSxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssVUFBSztBQUNyRztBQUVBLFNBQVMsc0JBQXNCLFNBQStDO0FBQzVFLFFBQU0sY0FBcUMsQ0FBQztBQUM1QyxNQUFJLFFBQVEsU0FBUyxTQUFVLGFBQVksS0FBSyxFQUFFLE1BQU0sWUFBWSxNQUFNLEVBQUUsUUFBUSxpQkFBSyxNQUFNLFdBQVcsa0JBQU0sT0FBTyxFQUFFLENBQUM7QUFDMUgsTUFBSSxRQUFRLFNBQVMsV0FBWSxhQUFZLEtBQUssRUFBRSxNQUFNLElBQUksS0FBSyxRQUFRLFFBQVEsVUFBVSxFQUFFLENBQUM7QUFDaEcsY0FBWSxLQUFLLEVBQUUsS0FBSyxhQUFhLFFBQVEsSUFBSSxFQUFFLENBQUM7QUFDcEQsU0FBTztBQUNUO0FBRUEsU0FBUyxZQUFZLE1BQXVEO0FBQzFFLFVBQVEsTUFBTTtBQUFBLElBQ1osS0FBSztBQUNILGFBQU8saUJBQUs7QUFBQSxJQUNkLEtBQUs7QUFDSCxhQUFPLGlCQUFLO0FBQUEsSUFDZCxLQUFLO0FBQ0gsYUFBTyxpQkFBSztBQUFBLElBQ2QsS0FBSztBQUNILGFBQU8saUJBQUs7QUFBQSxJQUNkLEtBQUs7QUFDSCxhQUFPLGlCQUFLO0FBQUEsSUFDZCxLQUFLO0FBQ0gsYUFBTyxpQkFBSztBQUFBLElBQ2Q7QUFDRSxhQUFPLGlCQUFLO0FBQUEsRUFDaEI7QUFDRjtBQUVBLFNBQVMsYUFBYSxNQUFzQztBQUMxRCxVQUFRLE1BQU07QUFBQSxJQUNaLEtBQUs7QUFDSCxhQUFPO0FBQUEsSUFDVCxLQUFLO0FBQ0gsYUFBTztBQUFBLElBQ1QsS0FBSztBQUNILGFBQU87QUFBQSxJQUNULEtBQUs7QUFDSCxhQUFPO0FBQUEsSUFDVCxLQUFLO0FBQ0gsYUFBTztBQUFBLElBQ1QsS0FBSztBQUNILGFBQU87QUFBQSxJQUNUO0FBQ0UsYUFBTztBQUFBLEVBQ1g7QUFDRjsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2FwaSIsICJpbXBvcnRfYXBpIl0KfQo=
