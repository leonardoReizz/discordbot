"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryPage = exports.getCategoryRoot = exports.Actions = exports.Namespaces = void 0;
const builders_1 = require("@discordjs/builders");
const discord_js_1 = require("discord.js");
const commands_1 = __importDefault(require("../commands"));
const utils_1 = require("../utils");
// Namespaces we will use
exports.Namespaces = {
    root: 'help_category_root',
    select: 'help_category_select',
    action: 'help_category_action'
};
// Actions we will use
exports.Actions = {
    next: '+',
    back: '-'
};
const N = exports.Namespaces;
const A = exports.Actions;
// Generate root embed for help paginator
function getCategoryRoot(ephemeral) {
    // Map the categories
    const mappedCategories = commands_1.default.map(({ name, description, emoji }) => new discord_js_1.SelectMenuOptionBuilder({
        label: name,
        description,
        emoji,
        value: name,
    }));
    // Create embed
    const embed = new discord_js_1.EmbedBuilder()
        .setTitle('Help Menu')
        .setDescription('Browse through all commands.');
    // Create select menu for categories
    const selectId = (0, utils_1.createId)(N.select);
    const select = new builders_1.SelectMenuBuilder()
        .setCustomId(selectId)
        .setPlaceholder('Command Category')
        .setMaxValues(1)
        .setOptions(mappedCategories);
    const component = new builders_1.ActionRowBuilder()
        .addComponents(select);
    return {
        embeds: [embed],
        components: [component],
        ephemeral,
    };
}
exports.getCategoryRoot = getCategoryRoot;
// Generate new embed for current category page
function getCategoryPage(interactionId) {
    var _a;
    // Extract needed metadata from interactionId
    const [_namespace, categoryName, action, currentOffset] = (0, utils_1.readId)(interactionId);
    const categoryChunks = commands_1.default.map((c) => {
        // Pre-map all commands as embed fields
        const commands = c.commands.map((c) => ({
            name: c.meta.name,
            value: c.meta.description,
        }));
        return Object.assign(Object.assign({}, c), { commands: (0, utils_1.chunk)(commands, 10) });
    });
    const category = categoryChunks.find(({ name }) => name === categoryName);
    if (!category)
        throw new Error('Invalid interactionId; Failed to find corresponding category page!');
    // Get current offset 
    let offset = parseInt(currentOffset);
    // if is NaN set offset to 0
    if (isNaN(offset))
        offset = 0;
    // Increment offset according to action
    if (action === A.next)
        offset++;
    else if (action === A.back)
        offset--;
    const emoji = category.emoji ? `${category.emoji} ` : '';
    const defaultDescription = `Browse through ${category.commands.flat().length} commands in ${emoji}${category.name}`;
    const embed = new discord_js_1.EmbedBuilder()
        .setTitle(`${emoji}${category.name} Commands`)
        .setDescription((_a = category.description) !== null && _a !== void 0 ? _a : defaultDescription)
        .setFields(category.commands[offset])
        .setFooter({ text: `${offset + 1} / ${category.commands.length}` });
    // Back button
    const backId = (0, utils_1.createId)(N.action, category.name, A.back, offset);
    const backButton = new builders_1.ButtonBuilder()
        .setCustomId(backId)
        .setLabel('Back')
        .setStyle(discord_js_1.ButtonStyle.Danger)
        .setDisabled(offset <= 0);
    // Return to root
    const rootId = (0, utils_1.createId)(N.root);
    const rootButton = new builders_1.ButtonBuilder()
        .setCustomId(rootId)
        .setLabel('Categories')
        .setStyle(discord_js_1.ButtonStyle.Secondary);
    // Next button
    const nextId = (0, utils_1.createId)(N.action, category.name, A.next, offset);
    const nextButton = new builders_1.ButtonBuilder()
        .setCustomId(nextId)
        .setLabel('Next')
        .setStyle(discord_js_1.ButtonStyle.Success)
        .setDisabled(offset >= 0);
    const component = new builders_1.ActionRowBuilder()
        .addComponents(backButton, rootButton, nextButton);
    return {
        embeds: [embed],
        components: [component]
    };
}
exports.getCategoryPage = getCategoryPage;
