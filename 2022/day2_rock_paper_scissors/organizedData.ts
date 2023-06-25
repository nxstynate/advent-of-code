import { rawData } from "./data";

export function organizedData(): string[] {
  const importedRawData = rawData();
  const splitLines = importedRawData.trim().split("\n");

  return splitLines;
}
