// import { calibrationDocument } from "./calibrationDoc.js";

const calibrationDocument = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;

function calibrationSplitIntoLines(input) {
  const inputIsSplitByLine = input.split("\n");
  const filteredArray = inputIsSplitByLine.filter(item => item !== "");
  return filteredArray;
}

// the funtion can return some of the letters as numbers but if there is one than more number that is spelled out then it doesn't not work.
// also figure out how to take the numbers and replace the spelled numbers in the calibration document
// at the moment this function is not implemented into the other functions yet.
function calibrationLettersToNumbers(input) {
  let isStoredNumber = [];

  const isSplitCalibrationDocument = calibrationSplitIntoLines(input);

  for (let i = 0; i < isSplitCalibrationDocument.length; i++) {
    if (isSplitCalibrationDocument[i].includes("one")) {
      isStoredNumber.push(1);
    } else if (isSplitCalibrationDocument[i].includes("two")) {
      isStoredNumber.push(2);
    } else if (isSplitCalibrationDocument[i].includes("three")) {
      isStoredNumber.push(3);
    } else if (isSplitCalibrationDocument[i].includes("four")) {
      isStoredNumber.push(4);
    } else if (isSplitCalibrationDocument[i].includes("five")) {
      isStoredNumber.push(5);
    } else if (isSplitCalibrationDocument[i].includes("six")) {
      isStoredNumber.push(6);
    } else if (isSplitCalibrationDocument[i].includes("seven")) {
      isStoredNumber.push(7);
    } else if (isSplitCalibrationDocument[i].includes("eight")) {
      isStoredNumber.push(8);
    } else if (isSplitCalibrationDocument[i].includes("nine")) {
      isStoredNumber.push(9);
    }
  }
  return isStoredNumber;
}

function calibrationValue(arr) {
  const firstElement = arr.slice(0, 1);
  const lastElement = arr.slice(-1);
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr.length === 1) {
  //     return firstElement;
  //   }
  //   return firstElement.concat(lastElement);
  // }
  return firstElement.concat(lastElement);
}

function calibrationValueSum(input) {
  let isNumber = [];
  let isFinalNumber = [];

  const isArray = calibrationSplitIntoLines(input);

  for (let i = 0; i < isArray.length; i++) {
    const hasRemovedLetters = isArray[i].replace(/[a-z]/gi, "");
    const hasFirstAndLastNumbers = calibrationValue(hasRemovedLetters);
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

const init = calibrationValueSum(calibrationDocument);
console.log(init);
