"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands_1 = __importDefault(require("./commands"));
const help_1 = __importDefault(require("./help"));
const events = [
    commands_1.default,
    help_1.default,
];
exports.default = events;
