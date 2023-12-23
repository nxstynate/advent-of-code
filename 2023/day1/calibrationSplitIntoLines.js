import { calibrationDocument } from "./tempCalibrationDoc.js";

export function calibrationSplitIntoLines(input) {
  const inputIsSplitByLine = input.split("\n");
  const filteredArray = inputIsSplitByLine.filter(item => item !== "");
  return filteredArray;
}

console.log(calibrationDocument);
