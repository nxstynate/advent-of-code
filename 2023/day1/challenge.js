const calibrationDocument = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;
const spelledNumbers = `
one
two
three 
four 
five 
six 
seven 
eight 
nine
`;

function splitLines(input) {
  const inputIsSplitByLine = input.split("\n");
  const filteredArray = inputIsSplitByLine.filter(item => item !== "");
  return filteredArray;
}

function spelledNumbersToInteger(inputCalibrationDocument) {
  let storeNumber = [];

  const isSplitCalibrationDocument = splitLines(inputCalibrationDocument);

  for (let i = 0; i < isSplitCalibrationDocument.length; i++) {
    if (isSplitCalibrationDocument[i].includes("one")) {
      storeNumber.push(1);
    } else if (isSplitCalibrationDocument[i].includes("two")) {
      storeNumber.push(2);
    } else if (isSplitCalibrationDocument[i].includes("three")) {
      storeNumber.push(3);
    } else if (isSplitCalibrationDocument[i].includes("four")) {
      storeNumber.push(4);
    } else if (isSplitCalibrationDocument[i].includes("five")) {
      storeNumber.push(5);
    } else if (isSplitCalibrationDocument[i].includes("six")) {
      storeNumber.push(6);
    } else if (isSplitCalibrationDocument[i].includes("seven")) {
      storeNumber.push(7);
    } else if (isSplitCalibrationDocument[i].includes("eight")) {
      storeNumber.push(8);
    } else if (isSplitCalibrationDocument[i].includes("nine")) {
      storeNumber.push(9);
    }
  }
  return storeNumber;
}

function main() {
  return spelledNumbersToInteger(calibrationDocument);
}

console.log(main());
