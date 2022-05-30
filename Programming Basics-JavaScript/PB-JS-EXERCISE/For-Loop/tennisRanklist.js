function tennisRanklist (input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);

    let allPoints = 0;
    let winTournament = 0;

    for (let i = 2; i < input.length; i++) {

       let tournamentsStage = input[i];

       switch (tournamentsStage) {

        case "W":
            startingPoints += 2000;
            allPoints += 2000;
            winTournament++;
            break;
        case "F":
            startingPoints += 1200;
            allPoints += 1200;
            break;
        case "SF":
            startingPoints += 720;
            allPoints += 720;
            break;        
       } 

    }

    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${Math.floor(allPoints / tournaments)}`);
    console.log(`${(winTournament / tournaments * 100).toFixed(2)}%`);
}

tennisRanklist (["5","1400","F","SF","W","W","SF"]);