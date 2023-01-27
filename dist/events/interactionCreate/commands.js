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
const commands_1 = __importDefault(require("../../commands"));
const utils_1 = require("../../utils");
const allCommands = commands_1.default.map(({ commands }) => commands).flat();
const allCommandsMap = new Map(allCommands.map((c) => [c.meta.name, c]));
exports.default = (0, utils_1.event)('interactionCreate', ({ log, client, }, interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isChatInputCommand())
        return;
    try {
        const commandName = interaction.commandName;
        const command = allCommandsMap.get(commandName);
        if (!command)
            throw new Error('Command not found...');
        yield command.exec({
            client,
            interaction,
            log(...args) {
                log(`[${command.meta.name}]`, ...args);
            },
        });
    }
    catch (error) {
        log('[Command Error]', error);
        if (interaction.deferred)
            return interaction.editReply(utils_1.EditReply.error('Something went wrong :('));
        return interaction.reply(utils_1.Reply.error('Something went wrong :('));
    }
}));
