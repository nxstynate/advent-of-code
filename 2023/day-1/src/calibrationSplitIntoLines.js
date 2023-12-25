"use strict";
exports.__esModule = true;
exports.calibrationSplitIntoLines = void 0;
function calibrationSplitIntoLines(input) {
    var inputSplitIntoLines = input.split("\n");
    var filteredInput = inputSplitIntoLines.filter(function (line) { return line !== ""; });
    return filteredInput;
}
exports.calibrationSplitIntoLines = calibrationSplitIntoLines;
