"use strict";
exports.__esModule = true;
var tempCalibrationDoc_1 = require("./tempCalibrationDoc");
var isSpelledNumbers = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
console.log.apply(console, isSpelledNumbers.toString());
function idx(input) {
    var isNumber = [];
    var splitIntoArray = input
        .toString()
        .split("\n")
        .filter(function (line) { return line !== ""; });
    for (var _i = 0, splitIntoArray_1 = splitIntoArray; _i < splitIntoArray_1.length; _i++) {
        var i = splitIntoArray_1[_i];
        if (i.includes("nine")) {
            i.replace("nine", "9");
        }
    }
    return splitIntoArray;
}
console.log(idx(tempCalibrationDoc_1.tempCalibrationDocument));
