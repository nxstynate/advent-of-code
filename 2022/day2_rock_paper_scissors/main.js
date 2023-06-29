"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");
var organizedData_1 = require("./organizedData");
function findTheWinner() {
    var gameRounds = (0, organizedData_1.organizedData)();
    var gamePlayer1 = (0, Player_1.player1)();
    var gamePlayer2 = (0, Player_1.player2)();
    for (var _i = 0, gameRounds_1 = gameRounds; _i < gameRounds_1.length; _i++) {
        var i = gameRounds_1[_i];
        for (var _a = 0, gamePlayer1_1 = gamePlayer1; _a < gamePlayer1_1.length; _a++) {
            var player1_1 = gamePlayer1_1[_a];
            for (var _b = 0, gamePlayer2_1 = gamePlayer2; _b < gamePlayer2_1.length; _b++) {
                var player2_1 = gamePlayer2_1[_b];
                if (player1_1.character || player2_1.character === i[1]) {
                    console.log(i);
                }
                else {
                    console.log(false);
                }
            }
        }
    }
}
//   for (let i of gameRounds) {
//     for (let j of i) {
//       for (let player1 of gamePlayer1) {
//         for (let player2 of gamePlayer2) {
//           if (player1.character || player2.character === j) {
//             console.log(true);
//           } else {
//             console.log(false);
//           }
//         }
//       }
//     }
//   }
// }
findTheWinner();
