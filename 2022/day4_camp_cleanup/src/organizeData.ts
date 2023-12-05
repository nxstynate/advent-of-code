import { rawData } from "./rawData";

function organizedData(inputData: string): string[] {
  const splitLines = inputData.trim().split("\n");

  const makeCharacterStringMatrix: string[] = [];

  for (let item of splitLines) {
    // const splitData: string[] = item.split(",");
    makeCharacterStringMatrix.push(item);
  }

  return makeCharacterStringMatrix;
}

const importedRawData = rawData();
export const finalData = organizedData(importedRawData);

console.log(finalData);
