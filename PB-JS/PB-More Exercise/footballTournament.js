function footballTournament (input) {

    let index = 0;
    let teamName = input[index];
    index++;
    let n = Number(input[index]);

    let wCount = 0;
    let lCount = 0;
    let dCount = 0;
    let totalPoints = 0;
    let isPlayed = false;

    for (let i = 0; i < n; i++) {
        index++;
        let result = input[index];
        isPlayed = true;

        switch (result) {
            case "W":
                totalPoints += 3;
                wCount++;
                break;
            case "D":
                totalPoints +=  1;
                dCount++;
                break;
            case "L":
                lCount++;
                break;       
        }
    }

    let winRate = wCount / n * 100;

    if (isPlayed) {
        console.log(`${teamName} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${wCount}`);
        console.log(`## D: ${dCount}`);
        console.log(`## L: ${lCount}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    } else {
        console.log(`${teamName} hasn't played any games during this season.`);
    }


}

footballTournament (["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"]);