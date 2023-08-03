"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizedData = void 0;
const data_1 = require("./data");
function organizedData() {
    const importedRawData = (0, data_1.rawData)();
    const splitLines = importedRawData.trim().split("\n");
    const makeCharacterStringMatrix = [];
    for (let item of splitLines) {
        const splitData = item.split(" ");
        makeCharacterStringMatrix.push(splitData);
    }
    return makeCharacterStringMatrix;
}
exports.organizedData = organizedData;
