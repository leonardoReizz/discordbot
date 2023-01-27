"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("./debug"));
const general_1 = __importDefault(require("./general"));
const xp_1 = __importDefault(require("./xp"));
const embed_1 = __importDefault(require("./embed"));
exports.default = [
    debug_1.default,
    general_1.default,
    xp_1.default,
    embed_1.default
];
