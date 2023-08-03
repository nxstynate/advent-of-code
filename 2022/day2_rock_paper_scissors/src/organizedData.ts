import { rawData } from "./data";

export function organizedData(): string[][] {
  const importedRawData = rawData();
  const splitLines = importedRawData.trim().split("\n");

  const makeCharacterStringMatrix: string[][] = [];

  for (let item of splitLines) {
    const splitData = item.split(" ");
    makeCharacterStringMatrix.push(splitData);
  }

  return makeCharacterStringMatrix;
}
