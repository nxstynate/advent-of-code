// loop through and get every number out of every line
// push those numbers to a new array for each line
// in that new array remove the middle number if there is more than two numbers
// once the numbers have been cleaned up combine the two remaining numbers
// fromt their move the numbers to the next array which will be the final array the number will be stored.
// then run a sum up all the numbers

// left off tyring to figure out how to check per line everything is laid out for the function.

const calibrationDocument = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

function keepFirstAndLastNumbers(arr) {
  return arr.slice(0, 1).concat(arr.slice(-1));
}

function splitIntoArray(input) {
  const inputIsSplitByLine = input.split("\n");
  const filteredArray = inputIsSplitByLine.filter(item => item !== "");
  return filteredArray;
}

function getStartAndEndNumber(input) {
  let isNumber = [];
  let isFinalNumber = [];

  const isArray = splitIntoArray(input);

  for (let i = 0; i < isArray.length; i++) {
    const hasRemovedLetters = isArray[i].replace(/[a-z]/gi, "");
    const hasFirstAndLastNumbers = keepFirstAndLastNumbers(hasRemovedLetters);
    const convertToInteger = parseInt(hasFirstAndLastNumbers);
    isNumber.push(convertToInteger);
  }
  console.log(isNumber);
  for (let i = 0; i < isNumber.length; i++) {
    isFinalNumber.push(isNumber[i]);
  }

  const sumIsFinalNumbers = isFinalNumber.reduce((a, b) => a + b, 0);
  return sumIsFinalNumbers;
}

const init = getStartAndEndNumber(calibrationDocument);
console.log(init);
