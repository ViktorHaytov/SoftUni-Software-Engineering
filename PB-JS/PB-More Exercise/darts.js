function darts (input) {

    let index = 0;
    let playerName = input[index];
    index++;
    let command = input[index];

    let startPoints = 301;
    let goodShotCount = 0;
    let badShotCount = 0;
    let isWinner = false;


    while (command !== "Retire") {
        let failed = command;
        index++;
        let points = Number(input[index]);

        if (failed === "Single") {
            
        } else if (failed === "Double") {
            points *= 2;

        } else if (failed === "Triple") {
            points *= 3;

        }

        if (points <= startPoints) {
            goodShotCount++;
            startPoints -= points;

        } else {
            badShotCount++;

        }

        if (startPoints === 0) {
            isWinner = true;
            break;
        }

        index++;
        command = input[index];
    }

    if (isWinner) {
        console.log(`${playerName} won the leg with ${goodShotCount} shots.`);

    } else {
        console.log(`${playerName} retired after ${badShotCount} unsuccessful shots.`);

    }

}

darts (["Michael van Gerwen",
"Triple",
"20",
"Triple",
"19",
"Double",
"10",
"Single",
"3",
"Single",
"1",
"Triple",
"20",
"Triple",
"20",
"Double",
"20"]);