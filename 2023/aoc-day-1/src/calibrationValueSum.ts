import { calibrationSplitIntoLines } from "./calibrationSplitIntoLines";
import { calibrationToIntegers } from "./calibrationToIntegers";

export function calibrationValueSum(input: string): number {
  const isArray: string[] = calibrationSplitIntoLines(input);
  const isInteger: number[] = calibrationToIntegers(isArray);
  const sumIsFinalNumbers = isInteger.reduce((a, b) => a + b, 0);
  return sumIsFinalNumbers;
}
