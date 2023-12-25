const numberMap: { [key: string]: string } = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

function replaceSpelledNumbers(lines: string[]): string[] {
  return lines.map(line => {
    let newLine = "";
    let word = "";

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char >= "a" && char <= "z") {
        word += char;
      } else {
        if (numberMap[word]) {
          newLine += numberMap[word];
        } else {
          newLine += word;
        }
        newLine += char;
        word = "";
      }
    }

    if (numberMap[word]) {
      newLine += numberMap[word];
    } else {
      newLine += word;
    }

    return newLine;
  });
}
