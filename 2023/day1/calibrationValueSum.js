import { calibrationSplitIntoLines } from "./calibrationSplitIntoLines.js";
import { calibrationValue } from "./calibrationValue.js";
import { calibrationLettersToNumbers } from "./calibrationLettersToNumbers.js";

export function calibrationValueSum(input) {
  let isNumber = [];
  let isFinalNumber = [];

  const isArray = calibrationSplitIntoLines(input);

  const isLettersToNumbers = calibrationLettersToNumbers(isArray);

  for (let i = 0; i < isLettersToNumbers.length; i++) {
    const hasRemovedLetters = isLettersToNumbers[i].replace(/[a-z]/gi, "");
    const hasFirstAndLastNumbers = calibrationValue(hasRemovedLetters);
    const convertToInteger = parseInt(hasFirstAndLastNumbers);
    isNumber.push(convertToInteger);
  }
  console.log(isNumber);
  for (let i = 0; i < isNumber.length; i++) {
    isFinalNumber.push(isNumber[i]);
  }
  const sumIsFinalNumbers = isFinalNumber.reduce((a, b) => a + b, 0);

  return sumIsFinalNumbers;
}
