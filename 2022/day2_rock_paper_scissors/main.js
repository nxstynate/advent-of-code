"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");
var organizedData_1 = require("./organizedData");
function findTheWinner() {
    var gameRounds = (0, organizedData_1.organizedData)();
    var Player1 = (0, Player_1.player1)();
    var Player2 = (0, Player_1.player2)();
    for (var _i = 0, gameRounds_1 = gameRounds; _i < gameRounds_1.length; _i++) {
        var gameRound = gameRounds_1[_i];
        for (var _a = 0, Player1_1 = Player1; _a < Player1_1.length; _a++) {
            var i = Player1_1[_a];
            if (i.character === gameRound) {
                console.log("it works");
            }
            console.log("it does not work");
        }
    }
}
findTheWinner();
