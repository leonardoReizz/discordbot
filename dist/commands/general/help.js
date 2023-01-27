"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const utils_1 = require("../../utils");
const help_1 = require("../../pages/help");
const meta = new discord_js_1.SlashCommandBuilder()
    .setName('help')
    .setDescription('Get a list of all commands for the bot.');
exports.default = (0, utils_1.command)(meta, ({ interaction }) => {
    return interaction.reply((0, help_1.getCategoryRoot)(true));
});
