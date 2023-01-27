"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditReply = exports.Reply = exports.Colors = void 0;
exports.Colors = {
    error: 0xf54242,
};
exports.Reply = {
    error(msg) {
        return {
            ephemeral: true,
            embeds: [{
                    color: exports.Colors.error,
                    description: msg
                }]
        };
    }
};
exports.EditReply = {
    error(msg) {
        return {
            embeds: [{
                    color: exports.Colors.error,
                    description: msg
                }]
        };
    }
};
