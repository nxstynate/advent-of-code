"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");
var GameTerms_1 = require("./GameTerms");
var organizedData_1 = require("./organizedData");
var gameSessions = (0, organizedData_1.organizedData)();
var gameResultTerms = (0, GameTerms_1.gameResult)();
var gamePlayer1 = (0, Player_1.player1)();
var gamePlayer2 = (0, Player_1.player2)();
var allOutcomes = [
    ["A", "Y"],
    ["B", "Z"],
    ["C", "X"],
    ["A", "Z"],
    ["B", "X"],
    ["C", "Y"],
    ["A", "X"],
    ["B", "Y"],
    ["C", "Z"], //tie
];
function gameSessionItemChoice() {
    var gameSessionItem = 0;
    for (var i = 0; i < gameSessions.length; i++) {
        var item1 = gameSessions[i][1];
        if (item1 === "X") {
            gameSessionItem += 1;
        }
        else if (item1 === "Y") {
            gameSessionItem += 2;
        }
        else if (item1 === "Z") {
            gameSessionItem += 3;
        }
        else {
            gameSessionItem += 0;
        }
    }
    return gameSessionItem;
}
function gameSessionScoreOutcome() {
    var gameSessionScore = [];
    for (var i = 0; i < gameSessions.length; i++) {
        var item1 = gameSessions[i][0];
        var item2 = gameSessions[i][1];
        if ((item1 === "A" && item2 === "X") ||
            (item1 === "B" && item2 === "Y") ||
            (item1 === "C" && item2 === "Z")) {
            gameSessionScore.push(3);
        }
        else if ((item1 === "A" && item2 === "Y") ||
            (item1 === "B" && item2 === "Z") ||
            (item1 === "C" && item2 === "X")) {
            gameSessionScore.push(6);
        }
        else if ((item1 === "A" && item2 === "Z") ||
            (item1 === "B" && item2 === "X") ||
            (item1 === "C" && item2 === "Y")) {
            gameSessionScore.push(0);
        }
        else {
            console.log("n/a");
        }
    }
    var sumSessionScore = gameSessionScore.reduce(function (a, b) {
        return a + b;
    });
    return sumSessionScore;
}
function totalScore(item1, item2) {
    return item1 + item2;
}
console.log(totalScore(gameSessionItemChoice(), gameSessionScoreOutcome()));
