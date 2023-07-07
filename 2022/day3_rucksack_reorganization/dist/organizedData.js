"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizedData = void 0;
const rawData_1 = require("./rawData");
function organizedData() {
    const importedRawData = (0, rawData_1.rawData)();
    const splitLines = importedRawData.trim().split("\n");
    const makeCharacterStringMatrix = [];
    for (let item of splitLines) {
        const splitData = item.split(" ");
        makeCharacterStringMatrix.push(splitData);
    }
    return makeCharacterStringMatrix;
}
exports.organizedData = organizedData;
console.log(organizedData());
