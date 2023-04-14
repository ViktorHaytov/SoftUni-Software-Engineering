function easterCompetition (input) {

    let index = 0;
    let cakeNum = Number(input[index]);

    let maxPoints = Number.MIN_SAFE_INTEGER;
    let winnerName = "";

    for (let i = 0; i < cakeNum; i++) {
        index++;
        let bakerName = input[index];
        index++;
        let command = input[index];

        let pointsSum = 0;
        
        while (command !== "Stop") {
            let grade = Number(command);

            pointsSum += grade;

            index++;
            command = input[index];
        }

        console.log(`${bakerName} has ${pointsSum} points.`);

        if (pointsSum > maxPoints) {
            maxPoints = pointsSum;
            winnerName = bakerName;

            console.log(`${winnerName} is the new number 1!`);

        }
    }

    console.log(`${winnerName} won competition with ${maxPoints} points!`);
}

easterCompetition (["3",
"Chef Manchev", "10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"]);