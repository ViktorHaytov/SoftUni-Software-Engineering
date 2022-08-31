function fishingBoat (input) {

    let budget = Number(input[0]);
    let season = input[1];
    let fishermenNumber = Number(input[2]);

    let boatPrice = 0;

    if (season === "Spring") {
        boatPrice = 3000;

        if (fishermenNumber <= 6){

            boatPrice = boatPrice * 0.90;

        }else if (fishermenNumber > 6 && fishermenNumber <= 11){

            boatPrice = boatPrice * 0.85;

        }else if (fishermenNumber > 12){

            boatPrice = boatPrice * 0.75;

        }

    }else if (season === "Summer" || season === "Autumn") {
        boatPrice = 4200;

        if (fishermenNumber <= 6){

            boatPrice = boatPrice * 0.90;

        }else if (fishermenNumber > 6 && fishermenNumber <= 11){

            boatPrice = boatPrice * 0.85;

        }else if (fishermenNumber > 12){

            boatPrice = boatPrice * 0.75;

        }

    }else if (season === "Winter") {
        boatPrice = 2600;

        if (fishermenNumber <= 6){

            boatPrice = boatPrice * 0.90;

        }else if (fishermenNumber > 6 && fishermenNumber <= 11){

            boatPrice = boatPrice * 0.85;

        }else if (fishermenNumber > 12){

            boatPrice = boatPrice * 0.75;

        }

    }

    if (fishermenNumber % 2 === 0 && season !== "Autumn"){
        

        boatPrice = boatPrice * 0.95;

    }

    if (budget >= boatPrice) {

        console.log(`Yes! You have ${(budget-boatPrice).toFixed(2)} leva left.`);

    }else {

        console.log(`Not enough money! You need ${(boatPrice-budget).toFixed(2)} leva.`);
    }
}

fishingBoat (["3600", "Autumn", "6"]);