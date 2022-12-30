function basketballTournament (input) {

    let index = 0;
    let tournamentName = input[index];
    index++;
    let matchesNum = Number(input[index]);

    let winCount = 0;
    let lossCount = 0;
    let allMatchesCount = 0;


    while (tournamentName !== "End of tournaments") {
        let currentMatchNum = 0;
        for (let i = 0; i < matchesNum; i++) {
            index++;
            let desiTeamPoints = Number(input[index]);
            index++;
            let opponentsTeamPoints = Number(input[index]);
            allMatchesCount++;
            currentMatchNum++;

            if (desiTeamPoints > opponentsTeamPoints) {
                winCount++;
                console.log(`Game ${currentMatchNum} of tournament ${tournamentName}: win with ${desiTeamPoints - opponentsTeamPoints} points.`);
            } else {
                lossCount++;
                console.log(`Game ${currentMatchNum} of tournament ${tournamentName}: lost with ${opponentsTeamPoints - desiTeamPoints} points.`);
            }

        }



        index++;
        tournamentName = input[index];
        index++;
        matchesNum = Number(input[index]);
    }

    console.log(`${(winCount / allMatchesCount * 100).toFixed(2)}% matches win`);
    console.log(`${(lossCount / allMatchesCount * 100).toFixed(2)}% matches lost`);
}

basketballTournament (["Dunkers",
"2",
"75",
"65",
"56",
"73",
"Fire Girls",
"3",
"67",
"34",
"83",
"98",
"66",
"45",
"End of tournaments"]);