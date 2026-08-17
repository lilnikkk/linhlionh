# Railway deployment

This repository is ready to deploy as the **Discord bot service** with the root Dockerfile.

Variables:
DISCORD_TOKEN=...
PREFIX=j
LAVALINK_HOST=...
LAVALINK_PORT=2333
LAVALINK_PASSWORD=...
LAVALINK_SECURE=false
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
PORT=3000

Important:
- Railway uses Dockerfile at repository root.
- This Dockerfile runs the Node bot only. Lavalink must be reachable at LAVALINK_HOST/LAVALINK_PORT.
- Do not put secrets in GitHub.
- If GitHub shows "Cannot retrieve latest commit at this time", that is a GitHub UI/API metadata warning, not a JavaScript syntax error. Refresh the repository or check GitHub Status.
- For per-server prefix persistence across container recreation, use a persistent volume or database. The included JSON file survives normal process restarts, but not guaranteed container replacement.

Discord:
jprefix !
!play song
!skip
!leave

Reset:
!prefix reset
