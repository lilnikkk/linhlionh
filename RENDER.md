# Jockie Music - Render Full Fixed

## Commands (default prefix `j`)
- `jp <song>` / `jplay <song>`
- `jpa` pause
- `jr` resume
- `js` skip
- `jb` previous/back
- `jst` stop
- `jlv` leave/disconnect voice
- `jq` queue
- `jn` now playing
- `jv 80` volume
- `jse 1:30` seek
- `jl off|track|queue` loop
- `jsh` shuffle
- `jrm 2` remove queue item
- `jc` clear queue
- `jap on|off` autoplay setting
- `jping`/`jpg` ping (default aliases: `ping`, `pg` => `jping`, `jpg`)
- `jh` help

## Prefix
Set `PREFIX` in Render. Examples: `j`, `!`, `.`

## Render
Root must contain `Dockerfile`, `package.json`, `render.yaml`, and `src/`.
Use Docker runtime and `./Dockerfile`.

## Important
Render Free is not a guaranteed 24/7 host for a Discord music bot. For continuous operation, use an always-on paid Render service or move the bot/Lavalink to an always-on VM/VPS.

Lavalink should be hosted separately and kept always-on. This repository contains the Lavalink config for reference, but Render should not be expected to run both bot and Lavalink in the same free web service.

## Required environment
DISCORD_TOKEN
PREFIX
LAVALINK_HOST
LAVALINK_PORT
LAVALINK_PASSWORD
LAVALINK_SECURE
SPOTIFY_CLIENT_ID
SPOTIFY_CLIENT_SECRET
PORT
