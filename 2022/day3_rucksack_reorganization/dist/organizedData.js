"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testData = exports.finalData = void 0;
const rawData_1 = require("./rawData");
const testRawData_1 = require("./testRawData");
function organizedData(inputData) {
    const splitLines = inputData.trim().split("\n");
    const makeCharacterStringMatrix = [];
    for (let item of splitLines) {
        const splitData = item.split(" ");
        makeCharacterStringMatrix.push(splitData);
    }
    return makeCharacterStringMatrix;
}
const importedRawData = (0, rawData_1.rawData)();
exports.finalData = organizedData(importedRawData);
const importedTestData = (0, testRawData_1.testRawData)();
exports.testData = organizedData(importedTestData);
