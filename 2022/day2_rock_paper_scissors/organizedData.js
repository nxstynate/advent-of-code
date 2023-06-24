"use strict";
exports.__esModule = true;
exports.organizedData = void 0;
var data_1 = require("./data");
function organizedData() {
    var importedRawData = (0, data_1.rawData)();
    var splitLines = importedRawData.trim().split("\n");
    return splitLines;
}
exports.organizedData = organizedData;
console.log(organizedData());
