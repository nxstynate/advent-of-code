const calibrationDoc = "2dafoneowjw3";
const spelledNumber = "one";
const integerNumber = 1;

function goFigure(inputCalibrationDoc) {
  let storeNumber = [];

  if (inputCalibrationDoc.includes("one")) {
    storeNumber.push(1);
  } else if (inputCalibrationDoc.includes("two")) {
    storeNumber.push(2);
  } else if (inputCalibrationDoc.includes("three")) {
    storeNumber.push(3);
  } else if (inputCalibrationDoc.includes("four")) {
    storeNumber.push(4);
  } else if (inputCalibrationDoc.includes("five")) {
    storeNumber.push(5);
  } else if (inputCalibrationDoc.includes("six")) {
    storeNumber.push(6);
  } else if (inputCalibrationDoc.includes("seven")) {
    storeNumber.push(7);
  } else if (inputCalibrationDoc.includes("eight")) {
    storeNumber.push(8);
  } else if (inputCalibrationDoc.includes("nine")) {
    storeNumber.push(9);
  }
  return storeNumber;
}

function main() {
  console.log(goFigure(calibrationDoc));
}

main();
