import { calibrationSplitIntoLines } from "./calibrationSplitIntoLines";
import { calibrationToIntegers } from "./calibrationToIntegers";
import { calibrationLettersToNumbers } from "./calibrationLettersToNumbers";

export function calibrationValueSum(input: string): number {
  const isArray: string[] = calibrationSplitIntoLines(input);
  const isWordToNumber: string[] = calibrationLettersToNumbers(isArray);
  const isInteger: number[] = calibrationToIntegers(isWordToNumber);
  console.log(isInteger);
  const sumIsFinalNumbers = isInteger.reduce((a, b) => a + b, 0);
  return sumIsFinalNumbers;
}
