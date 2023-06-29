"use strict";
exports.__esModule = true;
exports.organizedData = void 0;
var data_1 = require("./data");
function organizedData() {
    var importedRawData = (0, data_1.rawData)();
    var splitLines = importedRawData.trim().split("\n");
    var makeCharacterStringMatrix = [];
    for (var _i = 0, splitLines_1 = splitLines; _i < splitLines_1.length; _i++) {
        var item = splitLines_1[_i];
        var splitData = item.split(" ");
        makeCharacterStringMatrix.push(splitData);
    }
    return makeCharacterStringMatrix;
}
exports.organizedData = organizedData;
