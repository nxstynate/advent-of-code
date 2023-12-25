"use strict";
exports.__esModule = true;
// import { calibrationDocument } from "./calibrationDoc";
// import { calibrationDocRoundOne } from "./calibrationDocRoundOne";
var calibrationValueSum_1 = require("./calibrationValueSum");
var tempCalibrationDoc_1 = require("./tempCalibrationDoc");
function main() {
    return (0, calibrationValueSum_1.calibrationValueSum)(tempCalibrationDoc_1.tempCalibrationDocument);
}
console.log(main());
