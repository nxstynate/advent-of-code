"use strict";
function listOfData() {
    // const ruckSack: string[] = ["vJrwpWtwJgWrhcsFMMfFFhFp"];
    const ruckSack = [
        ["vJrwpWtwJgWrhcsFMMfFFhFp"],
        ["jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL"],
        ["PmmdzqPrVvPwwTWBwg"],
        ["wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn"],
        ["ttgJtRGJQctTZtZT"],
        ["CrZsJsPPZsGzwwsLwLmpwMDw"],
    ];
    return ruckSack;
}
//TODO: When you have the final list you're removing the doubles from seperate arrays. You need to keep the doubles that are from seperate arrays.
//NOTE: 1. Find comparisons in split array one at a time.
//NOTE: 2. Add the comparison to a list.
//NOTE: 3. Remove the doubles in the array
//NOTE: 4. Move the item to the final list
function matchedCharacters(input) {
    // let checkForDoubles: string[] = [];
    let matchedLettersArray = [];
    for (let array of input) {
        for (let characters of array) {
            const splitChar = characters.split("");
            const midpoint = Math.floor(splitChar.length / 2);
            const firstHalf = splitChar.slice(0, midpoint);
            const secondHalf = splitChar.slice(midpoint);
            const difference = firstHalf.filter(value => secondHalf.includes(value));
            const removeDoubles = Array.from(new Set(difference));
            for (let item of removeDoubles) {
                matchedLettersArray.push(item);
            }
        }
    }
    return matchedLettersArray;
}
const initFunction = matchedCharacters(listOfData());
console.log(initFunction);
