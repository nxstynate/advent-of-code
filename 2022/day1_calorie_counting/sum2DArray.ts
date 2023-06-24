import { dataOrganized } from "./dataOrganized";

export function sum2DArray(): number[] {
  const sumThisArray: number[][] = dataOrganized();

  const sumOfInnerArray = sumThisArray.map(innerArray => {
    return innerArray.reduce((a, b) => {
      return a + b;
    });
  });
  return sumOfInnerArray;
}
