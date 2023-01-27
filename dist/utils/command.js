"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = exports.command = void 0;
function command(meta, exec) {
    return {
        meta,
        exec,
    };
}
exports.command = command;
function category(name, commands, extra = {}) {
    return Object.assign({ name,
        commands }, extra);
}
exports.category = category;
