"use strict";
exports.__esModule = true;
exports.calibrationValueSum = void 0;
var calibrationSplitIntoLines_1 = require("./calibrationSplitIntoLines");
var calibrationToIntegers_1 = require("./calibrationToIntegers");
var calibrationLettersToNumbers_1 = require("./calibrationLettersToNumbers");
function calibrationValueSum(input) {
    var isArray = (0, calibrationSplitIntoLines_1.calibrationSplitIntoLines)(input);
    var isWordToNumber = (0, calibrationLettersToNumbers_1.calibrationLettersToNumbers)(isArray);
    var isInteger = (0, calibrationToIntegers_1.calibrationToIntegers)(isWordToNumber);
    console.log(isInteger);
    var sumIsFinalNumbers = isInteger.reduce(function (a, b) { return a + b; }, 0);
    return sumIsFinalNumbers;
}
exports.calibrationValueSum = calibrationValueSum;
