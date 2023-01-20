
import { Client, EmbedBuilder, TextChannel } from 'discord.js'

export function guildMemberRemove(client: Client<boolean>) {
  client.on('guildMemberRemove', (member) => {
    const channelId = "1062688671154851920"

    let embed = new EmbedBuilder()
      .setColor("Red")
      .setThumbnail(member.user.displayAvatarURL())
      .setTitle('👋Bem-vindo(a)!')
      .setDescription(`${member}, saiu do servidor`)
      .setFooter({text: `Member ID: ${member.id}`, iconURL: member.user.displayAvatarURL()})

    const channel = member.guild.channels.cache.find( channel => channel.id === channelId)

    if(!channel) return;

    (<TextChannel>channel).send({embeds: [embed]})
  })
}