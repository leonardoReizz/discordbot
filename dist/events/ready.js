"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = (0, utils_1.event)('ready', ({ log }, client) => {
    log(`Logged in as ${client.user.tag}`);
});
