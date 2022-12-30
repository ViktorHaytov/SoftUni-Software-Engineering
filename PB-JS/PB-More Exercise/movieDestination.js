function movieDestination (input) {

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let totalSum = 0;

    if (season === "Winter") {
        if (destination === "Dubai") {
            totalSum = (days * 45000) * 0.70;  

        } else if (destination === "Sofia") {
            totalSum = (days * 17000) * 1.25;

        } else if (destination === "London") {
            totalSum = days * 24000;

        }

    } else if (season === "Summer") {
        if (destination === "Dubai") {
            totalSum = (days * 40000) * 0.70;  

        } else if (destination === "Sofia") {
            totalSum = (days * 12500) * 1.25;

        } else if (destination === "London") {
            totalSum = days * 20250;

        }
    }

    if (budget >= totalSum) {
        console.log(`The budget for the movie is enough! We have ${(budget - totalSum).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(totalSum - budget).toFixed(2)} leva more!`);
    }
}

movieDestination (["400000",
"Sofia",
"Winter",
"20"]);