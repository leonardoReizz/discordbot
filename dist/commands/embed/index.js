"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const embed_1 = __importDefault(require("./embed"));
exports.default = (0, utils_1.category)('testeEmbed', [
    embed_1.default
]);
