import "dotenv/config";

const required = (name) => {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
};

const aliases = (name, defaults) => {
  const raw = process.env[name]?.trim();
  const values = (raw ? raw.split(",") : defaults)
    .map(v => v.trim().toLowerCase())
    .filter(Boolean);
  return [...new Set(values)];
};

// Prefix can be supplied as PREFIX (recommended), BOT_PREFIX or CUSTOM_PREFIX.
// Empty/whitespace values fall back to "j".
const prefix =
  String(process.env.PREFIX ?? process.env.BOT_PREFIX ?? process.env.CUSTOM_PREFIX ?? "j")
    .trim();

if (!prefix) throw new Error("PREFIX cannot be empty.");
if (prefix.length > 5) throw new Error("PREFIX must be 1-5 characters.");

const port = Number(process.env.PORT || 3000);
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid TCP port.");
}

const lavalinkPort = Number(process.env.LAVALINK_PORT || 2333);
if (!Number.isInteger(lavalinkPort) || lavalinkPort < 1 || lavalinkPort > 65535) {
  throw new Error("LAVALINK_PORT must be a valid TCP port.");
}

export const config = {
  token: required("DISCORD_TOKEN"),
  prefix,
  port,
  status: process.env.BOT_STATUS?.trim() || "Music",
  lavalink: {
    host: required("LAVALINK_HOST"),
    port: lavalinkPort,
    password: required("LAVALINK_PASSWORD"),
    secure: /^true$/i.test(process.env.LAVALINK_SECURE || "false")
  },
  commands: {
    help: aliases("HELP_ALIASES", ["help", "h"]),
    play: aliases("PLAY_ALIASES", ["play", "p"]),
    pause: aliases("PAUSE_ALIASES", ["pause", "pa"]),
    resume: aliases("RESUME_ALIASES", ["resume", "r"]),
    skip: aliases("SKIP_ALIASES", ["skip", "s"]),
    previous: aliases("PREVIOUS_ALIASES", ["previous", "prev", "back", "b"]),
    stop: aliases("STOP_ALIASES", ["stop", "st"]),
    leave: aliases("LEAVE_ALIASES", ["leave", "lv", "dc", "disconnect"]),
    nowplaying: aliases("NOWPLAYING_ALIASES", ["np", "nowplaying", "n"]),
    queue: aliases("QUEUE_ALIASES", ["queue", "q"]),
    volume: aliases("VOLUME_ALIASES", ["volume", "vol", "v"]),
    seek: aliases("SEEK_ALIASES", ["seek", "se"]),
    loop: aliases("LOOP_ALIASES", ["loop", "repeat", "l"]),
    shuffle: aliases("SHUFFLE_ALIASES", ["shuffle", "sh"]),
    remove: aliases("REMOVE_ALIASES", ["remove", "rm"]),
    clear: aliases("CLEAR_ALIASES", ["clear", "c"]),
    autoplay: aliases("AUTOPLAY_ALIASES", ["autoplay", "ap"]),
    ping: aliases("PING_ALIASES", ["ping", "pg"]),
    node: aliases("NODE_ALIASES", ["node"]),
    join: aliases("JOIN_ALIASES", ["join", "joi"]),
    prefix: aliases("PREFIX_ALIASES", ["prefix", "setprefix", "pf"])
  }
};

export const command = (name, value) => config.commands[name]?.includes(value) === true;
export const playerCommandNames = Object.keys(config.commands).filter(k => !["help","ping","node","join"].includes(k));
