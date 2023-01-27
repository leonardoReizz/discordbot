"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const utils_1 = require("../../utils");
const meta = new discord_js_1.SlashCommandBuilder()
    .setName('embed')
    .setDescription('Teste Emebed');
exports.default = (0, utils_1.command)(meta, ({ interaction, client }) => {
    var _a;
    console.log(interaction.member);
    let embed = new discord_js_1.EmbedBuilder()
        .setColor("Green")
        .setThumbnail((_a = interaction.member) === null || _a === void 0 ? void 0 : _a.avatar)
        .setTitle('👋Bem-vindo(a)!')
        .setDescription(`Olá ${interaction.member}, seja bem-vindo(a) a Oficina do dev, \n espero que você se divirta em nossa comunidade! \ `)
        .setFooter({ text: 'Authro id: 2222222222222' });
    return interaction.reply({ embeds: [embed] });
});
