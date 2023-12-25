// import { calibrationDocument } from "./calibrationDoc";
// import { calibrationDocRoundOne } from "./calibrationDocRoundOne";
import { calibrationValueSum } from "./calibrationValueSum";
import { tempCalibrationDocument } from "./tempCalibrationDoc";

function main(): number {
  return calibrationValueSum(tempCalibrationDocument);
}

console.log(main());
