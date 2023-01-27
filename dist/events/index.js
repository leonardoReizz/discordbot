"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ready_1 = __importDefault(require("./ready"));
const interactionCreate_1 = __importDefault(require("./interactionCreate"));
const events = [
    ...interactionCreate_1.default,
    ready_1.default,
];
exports.default = events;
