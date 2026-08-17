# Prefix configuration

The bot reads the prefix when the Node process starts.

Recommended:
PREFIX=!

Then commands are:
!play
!p
!skip
!s
!leave
!lv
!ping
!pg

IMPORTANT:
1. Change PREFIX in the hosting provider's Environment/Variables, not in Discord.
2. Save the variable.
3. Redeploy/restart the service. The bot logs:
   [BOT] Prefix=!
4. Do not put quotes around it.

Examples:
PREFIX=!
PREFIX=?
PREFIX=mc
PREFIX=.

The prefix is limited to 1-5 characters.

Priority:
PREFIX > BOT_PREFIX > CUSTOM_PREFIX > j
