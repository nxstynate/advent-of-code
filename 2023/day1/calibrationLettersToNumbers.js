import { calibrationSplitIntoLines } from "./calibrationSplitIntoLines.js";

export function calibrationLettersToNumbers(input) {
  let isStoredNumber = [];

  const isSplitCalibrationDocument = calibrationSplitIntoLines(input);

  for (let i = 0; i < isSplitCalibrationDocument.length; i++) {
    if (isSplitCalibrationDocument[i].includes("one")) {
      isStoredNumber.push(1);
    } else if (isSplitCalibrationDocument[i].includes("two")) {
      isStoredNumber.push(2);
    } else if (isSplitCalibrationDocument[i].includes("three")) {
      isStoredNumber.push(3);
    } else if (isSplitCalibrationDocument[i].includes("four")) {
      isStoredNumber.push(4);
    } else if (isSplitCalibrationDocument[i].includes("five")) {
      isStoredNumber.push(5);
    } else if (isSplitCalibrationDocument[i].includes("six")) {
      isStoredNumber.push(6);
    } else if (isSplitCalibrationDocument[i].includes("seven")) {
      isStoredNumber.push(7);
    } else if (isSplitCalibrationDocument[i].includes("eight")) {
      isStoredNumber.push(8);
    } else if (isSplitCalibrationDocument[i].includes("nine")) {
      isStoredNumber.push(9);
    }
  }
  return isStoredNumber;
}
