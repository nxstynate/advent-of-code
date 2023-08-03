import { rawData } from "./rawData";
import { testRawData } from "./testRawData";

function organizedData(inputData: string): string[][] {
  const splitLines = inputData.trim().split("\n");

  const makeCharacterStringMatrix: string[][] = [];

  for (let item of splitLines) {
    const splitData = item.split(" ");
    makeCharacterStringMatrix.push(splitData);
  }

  return makeCharacterStringMatrix;
}

const importedRawData = rawData();
export const finalData = organizedData(importedRawData);

const importedTestData = testRawData();
export const testData = organizedData(importedTestData);
