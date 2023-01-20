import { Client, EmbedBuilder, TextChannel } from 'discord.js'
import apiUser from '../../services/http/user'
import { dateToUnix } from '../../utils/convertDate';

export async function guildMemberAdd(client: Client<boolean>) {
  let memberID: undefined | string = undefined;

  client.on('guildMemberAdd', async (member) => {
    const channelId = "1041163783848087582"

    let embed = new EmbedBuilder()
      .setColor("Green")
      .setThumbnail(member.user.displayAvatarURL())
      .setTitle('👋Bem-vindo(a)!')
      .setDescription(`Olá ${member}, seja bem-vindo(a) a Oficina do dev, \n espero que você se divirta em nossa comunidade! \ `)
      .setFooter({text: `Member ID: ${member.id}`, iconURL: member.user.displayAvatarURL()})

    const channel = member.guild.channels.cache.find( channel => channel.id === channelId)

    if(!channel) return;

    (<TextChannel>channel).send({embeds: [embed], content: `${member}`})

    await apiUser.createUser({
      memberID: `${member.id}`,
      entryDate: dateToUnix(new Date()),
      exitDate: -1
    })
  })



  
}