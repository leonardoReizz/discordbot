"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const utils_1 = require("../utils");
const events_1 = __importDefault(require("../events"));
const keys_1 = __importDefault(require("../keys"));
const events_2 = require("./events");
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.GatewayIntentBits.Guilds,
        discord_js_1.GatewayIntentBits.GuildMembers,
    ],
});
(0, utils_1.registerEvents)(client, events_1.default);
client.login(keys_1.default.clientToken)
    .catch((err) => {
    console.error('[Login Error]', err);
    process.exit(1);
});
(0, events_2.rootEvents)(client);
