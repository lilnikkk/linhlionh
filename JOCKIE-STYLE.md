# Jockie-style behavior

- User commands are kept in chat; the bot does not auto-delete them.
- `play` on a playlist sends one visible **Added Playlist** compact embed.
- Every `Started playing ...` message uses Discord `SuppressNotifications` (`@silent`).
- Automatic track changes still send the Started playing message, but silently.
- No thumbnail or large artwork is added.
- Prefix is per Discord server: `jprefix !`, then `!play`, `!skip`, `!lv`.
- `jprefix !` requires Manage Server.
- Prefix persistence uses `data/prefixes.json`; use persistent storage on ephemeral hosts.
