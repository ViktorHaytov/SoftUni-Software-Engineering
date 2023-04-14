function bestPlayer (input) {

    let index = 0;
    let command = input[index];

    let maxGoals = Number.MIN_SAFE_INTEGER;
    let playerName = "";


    while (command !== "END") {
        let name = command;
        index++;
        let goals = Number(input[index]);

        if (maxGoals < goals) {
            maxGoals = goals;
            playerName = name;
        }

        if (goals >= 10) {
            break;
        }

       

        index++;
        command = input[index];
    }

    if (maxGoals >= 3) {
        console.log(`${playerName} is the best player!`);
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`${playerName} is the best player!`);
        console.log(`He has scored ${maxGoals} goals.`);
    }
    
}

bestPlayer (["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);