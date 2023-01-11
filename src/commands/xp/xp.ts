
import { SlashCommandBuilder } from 'discord.js'
import { command } from '../../utils'


const meta = new SlashCommandBuilder()
  .setName('xp')
  .setDescription('View XP')

  export default command(meta, ({interaction}) => {
    return interaction.reply('Seu xp é')
  })