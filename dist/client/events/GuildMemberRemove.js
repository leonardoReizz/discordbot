"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildMemberRemove = void 0;
const discord_js_1 = require("discord.js");
function guildMemberRemove(client) {
    client.on('guildMemberRemove', (member) => {
        const channelId = "1062688671154851920";
        let embed = new discord_js_1.EmbedBuilder()
            .setColor("Red")
            .setThumbnail(member.user.displayAvatarURL())
            .setTitle('👋Bem-vindo(a)!')
            .setDescription(`${member}, saiu do servidor`)
            .setFooter({ text: `Member ID: ${member.id}`, iconURL: member.user.displayAvatarURL() });
        const channel = member.guild.channels.cache.find(channel => channel.id === channelId);
        if (!channel)
            return;
        channel.send({ embeds: [embed] });
    });
}
exports.guildMemberRemove = guildMemberRemove;
