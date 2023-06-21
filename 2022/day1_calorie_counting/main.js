function putElvesToArray() {
    var firstElf = 1000 + 2000 + 3000;
    var secondElf = 4000;
    var thirdElf = 5000 + 6000;
    var fourthElf = 7000 + 8000 + 9000;
    var fifthElf = 10000;
    var elfObject = [
        { name: "First Elf", calorieAmount: firstElf },
        { name: "Second Elf", calorieAmount: secondElf },
        { name: "Third Elf", calorieAmount: thirdElf },
        { name: "Fourth Elf", calorieAmount: fourthElf },
        { name: "Fifth Elf", calorieAmount: fifthElf },
    ];
    var elvesArrayTotal = [
        elfObject[0].calorieAmount,
        elfObject[1].calorieAmount,
        elfObject[2].calorieAmount,
        elfObject[3].calorieAmount,
        elfObject[4].calorieAmount,
    ];
    elvesArrayTotal.sort(function (a, b) { return a - b; }).reverse();
    for (var _i = 0, elfObject_1 = elfObject; _i < elfObject_1.length; _i++) {
        var elf = elfObject_1[_i];
        if (elvesArrayTotal[0] === elf.calorieAmount) {
            return elf;
        }
    }
}
console.log(putElvesToArray());
