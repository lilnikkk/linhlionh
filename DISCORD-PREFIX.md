# Custom prefix directly from Discord

This version supports a different prefix for each Discord server.

## Change prefix

With the default prefix `j`:

`jprefix !`

The bot will confirm the change. After that use:

`!play song`
`!p song`
`!skip`
`!s`
`!leave`
`!lv`
`!queue`
`!q`

## Check current prefix

`!prefix`

## Reset to the default prefix

`!prefix reset`

## Permission

Only members with **Manage Server** can change the server prefix.

## Important

The prefix is stored in `data/prefixes.json`.

If you deploy on Railway, Render, Fly.io, etc., the filesystem may be reset when the container is recreated. For prefix settings to survive redeploys, mount a persistent volume at the project root (or set `PREFIX_FILE` to a persistent path), or move the prefix store to a database.
