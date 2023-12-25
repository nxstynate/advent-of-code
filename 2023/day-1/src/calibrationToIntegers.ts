import { calibrationValue } from "./calibrationValue";

export function calibrationToIntegers(input: string[]): number[] {
  let isNumber: number[] = [];

  for (let i = 0; i < input.length; i++) {
    const hasRemovedLetters: string = input[i]
      .toString()
      .replace(/[a-z]/gi, "");
    const hasFirstAndLastNumbers: string = calibrationValue(hasRemovedLetters);
    if (hasFirstAndLastNumbers.length > 0) {
      const convertToInteger: number = parseInt(hasFirstAndLastNumbers);
      isNumber.push(convertToInteger);
    }
  }
  return isNumber;
}
