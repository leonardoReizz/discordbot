"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToUnix = void 0;
function dateToUnix(date) {
    return Math.floor(date.getTime() / 1000);
}
exports.dateToUnix = dateToUnix;
