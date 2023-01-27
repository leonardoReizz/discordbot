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
Object.defineProperty(exports, "__esModule", { value: true });
const help_1 = require("../../pages/help");
const utils_1 = require("../../utils");
exports.default = (0, utils_1.event)('interactionCreate', ({ log, }, interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isButton() && !interaction.isSelectMenu())
        return;
    const [namespace] = (0, utils_1.readId)(interaction.customId);
    // If namespace not in help pages stop
    if (!Object.values(help_1.Namespaces).includes(namespace))
        return;
    try {
        // Defer update
        yield interaction.deferUpdate();
        switch (namespace) {
            case help_1.Namespaces.root:
                return yield interaction.editReply((0, help_1.getCategoryRoot)());
            case help_1.Namespaces.select:
                const newId = (0, utils_1.createId)(help_1.Namespaces.select, interaction.values[0]);
                return yield interaction.editReply((0, help_1.getCategoryPage)(newId));
            case help_1.Namespaces.action:
                return yield interaction.editReply((0, help_1.getCategoryPage)(interaction.customId));
            default:
                throw new Error('Invalid namespace reached...');
        }
    }
    catch (error) {
        log('[Help Error]', error);
        if (interaction.deferred)
            return interaction.editReply(utils_1.EditReply.error('Something went wrong :('));
        return interaction.reply(utils_1.Reply.error('Something went wrong :('));
    }
}));
