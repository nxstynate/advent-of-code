"use strict";
exports.__esModule = true;
exports.calibrationValue = void 0;
function calibrationValue(arr) {
    var firstElement = arr.slice(0, 1);
    var lastElement = arr.slice(-1);
    return firstElement.concat(lastElement);
}
exports.calibrationValue = calibrationValue;
