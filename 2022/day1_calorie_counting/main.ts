function elfWithTheLargestCalories() {
  const firstElf: number = 1000 + 2000 + 3000;
  const secondElf: number = 4000;
  const thirdElf: number = 5000 + 6000;
  const fourthElf: number = 7000 + 8000 + 9000;
  const fifthElf: number = 10000;

  const elfObject = [
    { name: "First Elf", calorieAmount: firstElf },
    { name: "Second Elf", calorieAmount: secondElf },
    { name: "Third Elf", calorieAmount: thirdElf },
    { name: "Fourth Elf", calorieAmount: fourthElf },
    { name: "Fifth Elf", calorieAmount: fifthElf },
  ];

  const elvesArrayTotal: number[] = [
    elfObject[0].calorieAmount,
    elfObject[1].calorieAmount,
    elfObject[2].calorieAmount,
    elfObject[3].calorieAmount,
    elfObject[4].calorieAmount,
  ];

  const elvesPutInOrderDescending = elvesArrayTotal
    .sort((a, b) => a - b)
    .reverse();

  for (let elf of elfObject) {
    if (elvesPutInOrderDescending[0] === elf.calorieAmount) {
      return elf;
    }
  }
}

console.log(elfWithTheLargestCalories());
