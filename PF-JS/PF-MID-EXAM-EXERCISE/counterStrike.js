function counterStrike (input) {

    let energy = Number(input.shift());
    let wonBattlesCount = 0;

    let index = 0;
    let command = input[index];

    while (command !== "End of battle") {
        command = Number(command);

         if (energy < command) {
            console.log(`Not enough energy! Game ends with ${wonBattlesCount} won battles and ${energy} energy`);
            break;

        }

        energy -= command;
        wonBattlesCount++;

        if (wonBattlesCount % 3 === 0) {
            energy += wonBattlesCount;
        }

        index++;
        command = input[index];

    }

    if (command === "End of battle") {
        console.log(`Won battles: ${wonBattlesCount}. Energy left: ${energy}`);
    }

}

counterStrike ((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]));