"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootEvents = void 0;
const GuildMemberAdd_1 = require("./GuildMemberAdd");
const GuildMemberRemove_1 = require("./GuildMemberRemove");
function rootEvents(client) {
    (0, GuildMemberAdd_1.guildMemberAdd)(client);
    (0, GuildMemberRemove_1.guildMemberRemove)(client);
}
exports.rootEvents = rootEvents;
