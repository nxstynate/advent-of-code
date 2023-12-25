"use strict";
exports.__esModule = true;
exports.calibrationToIntegers = void 0;
var calibrationValue_1 = require("./calibrationValue");
function calibrationToIntegers(input) {
    var isNumber = [];
    for (var i = 0; i < input.length; i++) {
        var hasRemovedLetters = input[i]
            .toString()
            .replace(/[a-z]/gi, "");
        var hasFirstAndLastNumbers = (0, calibrationValue_1.calibrationValue)(hasRemovedLetters);
        if (hasFirstAndLastNumbers.length > 0) {
            var convertToInteger = parseInt(hasFirstAndLastNumbers);
            isNumber.push(convertToInteger);
        }
    }
    return isNumber;
}
exports.calibrationToIntegers = calibrationToIntegers;
