import { data } from "./data";

export function dataOrganized(): number[][] {
  const stringData = data();

  const lines = stringData.trim().split("\n");
  const array2D: number[][] = [];

  let currentSubArray: number[] = [];
  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine !== "") {
      currentSubArray.push(Number(trimmedLine));
    } else if (currentSubArray.length > 0) {
      array2D.push(currentSubArray);
      currentSubArray = [];
    }
  });

  if (currentSubArray.length > 0) {
    array2D.push(currentSubArray);
  }
  return array2D;
}
