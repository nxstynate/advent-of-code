"use strict";
exports.__esModule = true;
exports.calibrationLettersToNumbers = void 0;
var numberMap = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9"
};
function calibrationLettersToNumbers(lines) {
    return lines.map(function (line) {
        var newLine = "";
        var word = "";
        for (var i = 0; i < line.length; i++) {
            var char = line[i];
            if (char >= "a" && char <= "z") {
                word += char;
            }
            else {
                if (numberMap[word]) {
                    newLine += numberMap[word];
                }
                else {
                    newLine += word;
                }
                newLine += char;
                word = "";
            }
        }
        if (numberMap[word]) {
            newLine += numberMap[word];
        }
        else {
            newLine += word;
        }
        return newLine;
    });
}
exports.calibrationLettersToNumbers = calibrationLettersToNumbers;
