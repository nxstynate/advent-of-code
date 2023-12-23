import { calibrationDocument } from "./calibrationDoc";
import { calibrationValueSum } from "./calibrationValueSum";

function main(): number {
  return calibrationValueSum(calibrationDocument);
}

console.log(main());
