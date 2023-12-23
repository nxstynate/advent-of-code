export function calibrationLettersToNumbers(input: string[]): number[] {
  let isStoredNumber: number[] = [];

  // const input = calibrationSplitIntoLines(input);

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("one")) {
      isStoredNumber.push(1);
    } else if (input[i].includes("two")) {
      isStoredNumber.push(2);
    } else if (input[i].includes("three")) {
      isStoredNumber.push(3);
    } else if (input[i].includes("four")) {
      isStoredNumber.push(4);
    } else if (input[i].includes("five")) {
      isStoredNumber.push(5);
    } else if (input[i].includes("six")) {
      isStoredNumber.push(6);
    } else if (input[i].includes("seven")) {
      isStoredNumber.push(7);
    } else if (input[i].includes("eight")) {
      isStoredNumber.push(8);
    } else if (input[i].includes("nine")) {
      isStoredNumber.push(9);
    }
  }
  return isStoredNumber;
}
