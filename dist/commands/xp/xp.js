"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const utils_1 = require("../../utils");
const meta = new discord_js_1.SlashCommandBuilder()
    .setName('xp')
    .setDescription('View XP');
exports.default = (0, utils_1.command)(meta, ({ interaction }) => {
    return interaction.reply('Seu xp é');
});
