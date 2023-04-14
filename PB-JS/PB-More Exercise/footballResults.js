function footballResults (input) {

    let one = input[0];
    let two = input[1];
    let three = input[2];

    let wonCount = 0;
    let lostCount = 0;
    let drawnCount = 0;

    let one1Result = Number(one[0]);
    let one2Result = Number(one[2]);
    if (one1Result > one2Result) {
        wonCount++;
    } else if (one2Result > one1Result) {
        lostCount++;
    } else {
        drawnCount++;
    }

    let two1Result = Number(two[0]);
    let two2Result = Number(two[2]);
    if (two1Result > two2Result) {
        wonCount++;
    } else if (two2Result > two1Result) {
        lostCount++;
    } else {
        drawnCount++;
    }

    let three1Result = Number(three[0]);
    let three2Result = Number(three[2]);
    if (three1Result > three2Result) {
        wonCount++;
    } else if (three2Result > three1Result) {
        lostCount++;
    } else {
        drawnCount++;
    }

    console.log(`Team won ${wonCount} games.`);
    console.log(`Team lost ${lostCount} games.`);
    console.log(`Drawn games: ${drawnCount}`);

}

footballResults (["0:2",
"0:1",
"3:3"]);