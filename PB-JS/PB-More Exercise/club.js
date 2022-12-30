function club (input) {

    let index = 0;
    let desiredProfit = Number(input[index]);
    index++;
    let command = input[index];

    let totalSum = 0;
    let isReached = false;


    while (command !== "Party!") {
        let coctale = command;
        index++;
        let coctaleNumber = Number(input[index]);

        let coctalePrice = Number(coctale.length)
        let totalPrice = coctalePrice * coctaleNumber;
      
        if (totalPrice % 2 !== 0) {
            totalPrice *= 0.75;
            totalSum += totalPrice;
        } else {
            totalSum += totalPrice;
        }

        if (totalSum >= desiredProfit) {
            isReached = true;
            console.log("Target acquired.");
            console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (!isReached) {
        console.log(`We need ${(desiredProfit - totalSum).toFixed(2)} leva more.`);
        console.log(`Club income - ${totalSum.toFixed(2)} leva.`);
    }

}

club (["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"]);