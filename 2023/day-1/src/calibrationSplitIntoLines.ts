export function calibrationSplitIntoLines(input: string): string[] {
  const inputSplitIntoLines: string[] = input.split("\n");
  const filteredInput: string[] = inputSplitIntoLines.filter(
    line => line !== ""
  );
  return filteredInput;
}
