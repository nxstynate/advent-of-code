"use strict";
exports.__esModule = true;
exports.resultCombinations = void 0;
var Player_1 = require("./Player");
function generateCombinations(set1, set2) {
    var combinations = [];
    for (var i = 0; i < set1.length; i++) {
        for (var j = 0; j < set2.length; j++) {
            combinations.push([set1[i], set2[j]]);
        }
    }
    return combinations;
}
var gamePlayer1 = (0, Player_1.player1)();
var gamePlayer2 = (0, Player_1.player2)();
var set1 = [
    gamePlayer1[0].character,
    gamePlayer1[1].character,
    gamePlayer1[2].character,
];
var set2 = [
    gamePlayer2[0].character,
    gamePlayer2[1].character,
    gamePlayer2[2].character,
];
exports.resultCombinations = generateCombinations(set1, set2);
