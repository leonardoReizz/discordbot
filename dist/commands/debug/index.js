"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const ping_1 = __importDefault(require("./ping"));
exports.default = (0, utils_1.category)('Debug', [
    ping_1.default,
]);
