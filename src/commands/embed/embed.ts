import { EmbedBuilder, SlashCommandBuilder, TextChannel } from 'discord.js'
import { command } from '../../utils';


const meta = new SlashCommandBuilder()  
  .setName('embed')
  .setDescription('Teste Emebed')

  export default command(meta, ({interaction, client}) => {
    console.log(interaction.member)

  let embed = new EmbedBuilder()
    .setColor("Green")
    .setThumbnail(interaction.member?.avatar as string)
    .setTitle('👋Bem-vindo(a)!')
    .setDescription(`Olá ${interaction.member}, seja bem-vindo(a) a Oficina do dev, \n espero que você se divirta em nossa comunidade! \ `)
    .setFooter({text: 'Authro id: 2222222222222'})
  return interaction.reply({embeds: [embed]})


})