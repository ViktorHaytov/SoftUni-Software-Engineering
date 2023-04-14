function gameNumberWars (input) {

    let index = 0;
    let playerName1 = input[index];
    index++;
    let playerName2 = input[index];
    index++;
    let command = input[index];

    let pointsPlayer1 = 0;
    let pointsPlayer2 = 0;
    let isNumberWars = false;

    while (command !== "End of game") {
        let card1 = Number(command);
        index++;
        let card2 = Number(input[index]);

        if (card1 > card2) {
            let points1 = card1 - card2;
            pointsPlayer1 += points1;

        } else if (card1 < card2) {
            let points2 = card2 - card1;
            pointsPlayer2 += points2;

        } else {
            index++;
            let card1 = Number(input[index]);
            index++;
            let card2 = Number(input[index]);

            if (card1 > card2) {
                console.log("Number wars!");
                console.log(`${playerName1} is winner with ${pointsPlayer1} points`);
                isNumberWars = true;
                break;

            } else {
                console.log("Number wars!");
                console.log(`${playerName2} is winner with ${pointsPlayer2} points`);
                isNumberWars = true;
                break;

            }

        }

        index++;
        command = input[index];

    }

    if (!isNumberWars) {
        console.log(`${playerName1} has ${pointsPlayer1} points`);
        console.log(`${playerName2} has ${pointsPlayer2} points`);
    }

   
}

gameNumberWars (["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"]);