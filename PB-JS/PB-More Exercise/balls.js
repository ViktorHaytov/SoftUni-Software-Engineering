function balls (input) {

    let ballsNum = Number(input[0]);

    let redBallsSum = 0;
    let orangeBallsSum = 0;
    let yellowBallsSum = 0;
    let whiteBallsSum = 0;
    let totalPoints = 0;

    let blackBallsCount = 0;
    let otherBallsCount = 0;
    
    for (let i = 1; i <= ballsNum; i++) {
        let ballsColor = input[i];

        if (ballsColor === "red") {
            redBallsSum++;
            totalPoints += 5;

        } else if (ballsColor === "orange") {
            orangeBallsSum++;
            totalPoints += 10;

        } else if (ballsColor === "yellow") {
            yellowBallsSum++;
            totalPoints += 15;

        } else if (ballsColor === "white") {
            whiteBallsSum++;
            totalPoints += 20;

        } else if (ballsColor === "black") {
            blackBallsCount++;
            totalPoints /= 2;

        } else {
            otherBallsCount++;

        }
    }

    console.log(`Total points: ${Math.floor(totalPoints)}`);
    console.log(`Red balls: ${redBallsSum}`);
    console.log(`Orange balls: ${orangeBallsSum}`);
    console.log(`Yellow balls: ${yellowBallsSum}`);
    console.log(`White balls: ${whiteBallsSum}`);
    console.log(`Other colors picked: ${otherBallsCount}`);
    console.log(`Divides from black balls: ${blackBallsCount}`);


}

balls (["3",
"white",
"black",
"pink"]);