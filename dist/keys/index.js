"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const keys = {
    clientToken: (_a = process.env.CLIENT_TOKEN) !== null && _a !== void 0 ? _a : 'nil',
    testGuild: (_b = process.env.TEST_GUILD) !== null && _b !== void 0 ? _b : 'nil'
};
if (Object.values(keys).includes('nil'))
    throw new Error('Not all ENV variables are defined!');
exports.default = keys;
