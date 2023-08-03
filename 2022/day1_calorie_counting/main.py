def elfWithTheLargestCalories():
    firstElf = 1000 + 2000 + 3000;
    secondElf = 4000;
    thirdElf = 5000 + 6000;
    fourthElf = 7000 + 8000 + 9000;
    fifthElf = 10000;

    list_of_elves = {
        'first elf': firstElf,
        'second self': secondElf,
        'third elf': thirdElf,
        'fourth elf': fourthElf,
        'fifth elf': fifthElf
    }

    array_of_elves = []

    for elf_amount in list_of_elves.values():
        array_of_elves.append(elf_amount)

    array_of_elves.sort()
    array_of_elves.reverse()

    for key, value in list_of_elves.items():
        if array_of_elves[0] == value:
            return key, value

print(elfWithTheLargestCalories())

