"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finalData = void 0;
const rawData_1 = require("./rawData");
function organizedData(inputData) {
    const splitLines = inputData.trim().split("\n");
    const makeCharacterStringMatrix = [];
    for (let item of splitLines) {
        // const splitData: string[] = item.split(",");
        makeCharacterStringMatrix.push(item);
    }
    return makeCharacterStringMatrix;
}
const importedRawData = (0, rawData_1.rawData)();
exports.finalData = organizedData(importedRawData);
console.log(exports.finalData);
