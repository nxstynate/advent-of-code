import { calibrationDocument } from "./tempCalibrationDoc.js";
import { calibrationValueSum } from "./calibrationValueSum.js";
// import { calibrationDocument } from "./calibrationDoc.js";

// the funtion can return some of the letters as numbers but if there is one than more number that is spelled out then it doesn't not work.
// also figure out how to take the numbers and replace the spelled numbers in the calibration document
// at the moment this function is not implemented into the other functions yet.

function main() {
  return calibrationValueSum(calibrationDocument);
}

console.log(main());
