import { sum2DArray } from "./sum2DArray";

function elfWithTheLargestCalories() {
  const organizedData = sum2DArray();

  const findTheLargestNumber = Math.max(...organizedData);

  return findTheLargestNumber;
}
console.log(
  `Larges amount of calories for a single elf: ${elfWithTheLargestCalories()}`
);

function theTopThreeElves() {
  const organizedData = sum2DArray();

  const elvesPutInOrderDescending = organizedData
    .sort((a, b) => a - b)
    .reverse();

  let topTheeElves: number[] = [];

  for (let i = 0; i < elvesPutInOrderDescending.length; i++) {
    if (i < 3) {
      topTheeElves.push(elvesPutInOrderDescending[i]);
    } else {
      break;
    }
  }
  const sumTopThreeElves = topTheeElves.reduce((a, b) => {
    return a + b;
  });
  return sumTopThreeElves;
}

console.log(`Total of Top Three Elves with calories: ${theTopThreeElves()}`);
