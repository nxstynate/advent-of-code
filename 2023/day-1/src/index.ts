import fs from "fs";

function readLineFileSync() {
  fs.readFileSync("line")
    .toString()
    .split("\n")
    .forEach(line => {
      console.log(line);
    });
}
