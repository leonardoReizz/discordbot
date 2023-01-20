import { Client } from 'discord.js';

import { guildMemberAdd } from "./GuildMemberAdd";
import { guildMemberRemove } from "./GuildMemberRemove";

export function rootEvents(client: Client<boolean>) {
  guildMemberAdd(client);
  guildMemberRemove(client);
}

