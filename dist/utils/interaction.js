"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readId = exports.createId = void 0;
function createId(namespace, ...args) {
    return `${namespace};${args.join(';')}`;
}
exports.createId = createId;
function readId(id) {
    const [namespace, ...args] = id.split(';');
    return [namespace, ...args];
}
exports.readId = readId;
