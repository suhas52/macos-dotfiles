#!/usr/bin/env python3

import json
import os
import sys
import time

import requests

TOKEN = os.environ.get("DISCORD_TOKEN")

if not TOKEN:
    print("Set DISCORD_TOKEN first.", file=sys.stderr)
    sys.exit(1)

BASE = "https://discord.com/api/v10"

HEADERS = {
    "Authorization": TOKEN,
    "User-Agent": "DiscordJumpExporter/1.0",
}


def api(path: str):
    while True:
        r = requests.get(BASE + path, headers=HEADERS)

        if r.status_code == 429:
            retry = float(r.json().get("retry_after", 5))
            print(f"Rate limited. Sleeping {retry:.2f}s...")
            time.sleep(retry + 1)
            continue

        r.raise_for_status()

        # Intentionally slow.
        time.sleep(1)

        return r.json()


entries = []

print("Fetching guilds...")
guilds = api("/users/@me/guilds")

for i, guild in enumerate(guilds, start=1):
    print(f"[{i}/{len(guilds)}] {guild['name']}")

    channels = api(f"/guilds/{guild['id']}/channels")

    categories = {
        c["id"]: c["name"]
        for c in channels
        if c["type"] == 4
    }

    for channel in channels:
        if channel["type"] == 4:
            continue

        search = " ".join(filter(None, [
            guild["name"],
            categories.get(channel.get("parent_id")),
            channel["name"],
        ])).lower()

        entries.append({
            "kind": "guild",

            "guildId": guild["id"],
            "guildName": guild["name"],
            "guildIcon": guild.get("icon"),
            "guildBanner": guild.get("banner"),

            "channelId": channel["id"],
            "channelName": channel["name"],
            "channelType": channel["type"],

            "categoryId": channel.get("parent_id"),
            "categoryName": categories.get(channel.get("parent_id")),

            "position": channel["position"],

            "search": search,

            "url": f"discord://-/channels/{guild['id']}/{channel['id']}",
        })

print("Fetching DMs...")
dms = api("/users/@me/channels")

for dm in dms:
    if dm["type"] == 1:
        recipient = dm["recipients"][0]

        display = (
            recipient.get("global_name")
            or recipient["username"]
        )

        primary = recipient.get("primary_guild") or {}

        search = " ".join(filter(None, [
            display,
            recipient["username"],
            primary.get("tag"),
        ])).lower()

        entries.append({
            "kind": "dm",

            "channelId": dm["id"],

            "userId": recipient["id"],

            "displayName": display,
            "username": recipient["username"],
            "userAvatar": recipient.get("avatar"),

            "serverTag": primary.get("tag"),
            "serverId": primary.get("identity_guild_id"),

            "search": search,

            "url": f"discord://-/channels/@me/{dm['id']}",
        })

    elif dm["type"] == 3:
        members = [
            {
                "id": r["id"],
                "name": r.get("global_name") or r["username"],
                "username": r["username"],
                "avatar": r.get("avatar"),
            }
            for r in dm["recipients"]
        ]

        names = [m["name"] for m in members]

        display = dm.get("name") or ", ".join(names)

        search = " ".join([display] + names).lower()

        entries.append({
            "kind": "group",

            "channelId": dm["id"],

            "displayName": display,
            "members": members,

            "search": search,

            "url": f"discord://-/channels/@me/{dm['id']}",
        })

entries.sort(key=lambda e: (
    e["kind"],
    e.get("guildName", ""),
    e.get("categoryName", "") or "",
    e.get("channelName", e.get("displayName", "")).lower(),
))

with open("channels.json", "w", encoding="utf-8") as f:
    json.dump(entries, f, indent=2, ensure_ascii=False)

print(f"\nExported {len(entries)} jump targets.")
