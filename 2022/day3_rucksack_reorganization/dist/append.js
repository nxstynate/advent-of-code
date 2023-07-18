"use strict";
let emptyDouble = [];
const thisNumber = [1, 2, 3, 4, 5, 6];
const thisOtherNumber = [7, 8, 9];
for (let i of thisNumber) {
    if (5 < i) {
        emptyDouble[i].push(i);
    }
}
console.log(emptyDouble);
