"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guildMemberAdd = void 0;
const discord_js_1 = require("discord.js");
const user_1 = __importDefault(require("../../services/http/user"));
const convertDate_1 = require("../../utils/convertDate");
function guildMemberAdd(client) {
    return __awaiter(this, void 0, void 0, function* () {
        let memberID = undefined;
        client.on('guildMemberAdd', (member) => __awaiter(this, void 0, void 0, function* () {
            const channelId = "1041163783848087582";
            let embed = new discord_js_1.EmbedBuilder()
                .setColor("Green")
                .setThumbnail(member.user.displayAvatarURL())
                .setTitle('👋Bem-vindo(a)!')
                .setDescription(`Olá ${member}, seja bem-vindo(a) a Oficina do dev, \n espero que você se divirta em nossa comunidade! \ `)
                .setFooter({ text: `Member ID: ${member.id}`, iconURL: member.user.displayAvatarURL() });
            const channel = member.guild.channels.cache.find(channel => channel.id === channelId);
            if (!channel)
                return;
            channel.send({ embeds: [embed], content: `${member}` });
            yield user_1.default.createUser({
                memberID: `${member.id}`,
                entryDate: (0, convertDate_1.dateToUnix)(new Date()),
                exitDate: -1
            });
        }));
    });
}
exports.guildMemberAdd = guildMemberAdd;
