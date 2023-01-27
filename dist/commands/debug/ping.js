"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const utils_1 = require("../../utils");
const meta = new discord_js_1.SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping the bot for a response.')
    .addStringOption((option) => option
    .setName('message')
    .setDescription('Provide the bot a message to respond with.')
    .setMinLength(1)
    .setMaxLength(2000)
    .setRequired(false));
exports.default = (0, utils_1.command)(meta, ({ interaction }) => {
    const message = interaction.options.getString('message');
    return interaction.reply({
        ephemeral: true,
        content: message !== null && message !== void 0 ? message : 'Pong! 🏓'
    });
});
