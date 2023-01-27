"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
// Takes an array of items and chunk items into a matrix.
// Useful for offset based pagination.
function chunk(items, chunk) {
    // Initialize the matrix
    const chunks = [];
    // For loop; Loop until i is more than our items available; Increment by the given chunk;
    // Each iteraction copy push targeted chunk from the passed items to the chunks array
    for (let i = 0; i < items.length; i += chunk) {
        chunks.push(items.slice(i, i + chunk));
    }
    return chunks;
}
exports.chunk = chunk;
