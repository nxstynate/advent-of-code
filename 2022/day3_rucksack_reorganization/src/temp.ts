function checkGroupsForMatches(inputData: string[][]): string[] {
  const matchedLettersArray: string[] = [];

  for (let i = 0; i < inputData.length - 2; i += 3) {
    const currentArrays = inputData.slice(i, i + 3);
    const firstArray = currentArrays[0][0];

    for (const char of firstArray) {
      let isCommon = true;

      for (let j = 1; j < currentArrays.length; j++) {
        if (!currentArrays[j][0].includes(char)) {
          isCommon = false;
          break;
        }
      }

      if (isCommon && !matchedLettersArray.includes(char)) {
        matchedLettersArray.push(char);
      }
    }
  }

  return matchedLettersArray;
}

const ruckSack: string[][] = [
  ["vJrwpWtwJgWrhcsFMMfFFhFp"],
  ["jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"],
  ["PmmdzqPrVvPwwTWBwg"],
  ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"],
  ["ttgJtRGJQctTZtZT"],
  ["CrZsJsPPZsGzwwsLwLmpwMDw"],
];

const initMethod = checkGroupsForMatches(ruckSack);
console.log(initMethod);
