export function calibrationSplitIntoLines(input) {
  const inputIsSplitByLine = input.split("\n");
  const filteredArray = inputIsSplitByLine.filter(item => item !== "");
  return filteredArray;
}
