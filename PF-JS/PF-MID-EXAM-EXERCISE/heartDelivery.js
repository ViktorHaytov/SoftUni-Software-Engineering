function heartDelivery (input) {

    let neighborhood = input.shift().split("@").map(Number);

    let index = 0;
    let command = input[index];

    let jumpIndex = 0;

    while (command !== "Love!") {
        command = command.split(" ");
        let jump  = Number(command[1]);
        jumpIndex += jump;

        if (jumpIndex > neighborhood.length - 1) {
            jumpIndex = 0;
        }
        if (neighborhood[jumpIndex] === 0) {
            console.log(`Place ${jumpIndex} already had Valentine's day.`);

        } else {
            neighborhood[jumpIndex] -= 2;
            if (neighborhood[jumpIndex] === 0) {
                console.log(`Place ${jumpIndex} has Valentine's day.`);

            }
        }

        index++;
        command = input[index];
    }

    console.log(`Cupid's last position was ${jumpIndex}.`);

    let houseCount = neighborhood.filter(el => el !== 0);

    if (houseCount.length !== 0) {
        console.log(`Cupid has failed ${houseCount.length} places.`);

    } else {
        console.log("Mission was successful.");

    }  

}

heartDelivery (["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);