import fs from "node:fs";
import path from "node:path";

const file = path.resolve(process.env.PREFIX_FILE || "data/prefixes.json");
const defaultPrefix = String(
  process.env.PREFIX ?? process.env.BOT_PREFIX ?? process.env.CUSTOM_PREFIX ?? "j"
).trim() || "j";

if (defaultPrefix.length > 5) {
  throw new Error("PREFIX must be 1-5 characters.");
}

const prefixes = new Map();

function load() {
  try {
    if (!fs.existsSync(file)) return;
    const raw = fs.readFileSync(file, "utf8");
    if (!raw.trim()) return;
    const data = JSON.parse(raw);
    for (const [guildId, value] of Object.entries(data || {})) {
      if (typeof value === "string" && value.length >= 1 && value.length <= 5 && !/\s/.test(value)) {
        prefixes.set(guildId, value);
      }
    }
  } catch (error) {
    console.warn("[PREFIX] Load failed:", error?.message || error);
  }
}

function save() {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(Object.fromEntries(prefixes), null, 2), "utf8");
    return true;
  } catch (error) {
    console.warn("[PREFIX] Save failed (runtime still works):", error?.message || error);
    return false;
  }
}

load();

export function getPrefix(guildId) {
  return prefixes.get(guildId) || defaultPrefix;
}

export function setPrefix(guildId, value) {
  const prefix = String(value ?? "").trim();
  if (!prefix) throw new Error("Prefix không được để trống.");
  if (prefix.length > 5) throw new Error("Prefix chỉ được từ 1 đến 5 ký tự.");
  if (/\s/.test(prefix)) throw new Error("Prefix không được chứa khoảng trắng.");
  if (/[\u0000-\u001F\u007F]/.test(prefix)) throw new Error("Prefix chứa ký tự không hợp lệ.");
  if (prefix.includes("@everyone") || prefix.includes("@here")) throw new Error("Prefix không hợp lệ.");

  prefixes.set(guildId, prefix);
  const persisted = save();
  return { prefix, persisted };
}

export function resetPrefix(guildId) {
  prefixes.delete(guildId);
  const persisted = save();
  return { prefix: defaultPrefix, persisted };
}

export { defaultPrefix };
