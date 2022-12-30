function coffeeMachine (input) {

    let drink = input[0];
    let sugar = input[1];
    let drinksNum = Number(input[2]);

    let totalSum = 0;

    if (drink === "Espresso") {
        if (sugar === "Without") {
            totalSum += (drinksNum * 0.90) * 0.65;

        } else if (sugar === "Normal") {
            totalSum = drinksNum * 1.00;

        } else if (sugar === "Extra") {
            totalSum = drinksNum * 1.20;

        }

        if (drinksNum >= 5) {
            totalSum *= 0.75;
        }

    } else if (drink === "Cappuccino") {
        if (sugar === "Without") {
            totalSum = (drinksNum * 1.00) * 0.65;

        } else if (sugar === "Normal") {
            totalSum = drinksNum * 1.20;

        } else if (sugar === "Extra") {
            totalSum = drinksNum * 1.60;
            
        }

    } else if (drink === "Tea") {
        if (sugar === "Without") {
            totalSum = (drinksNum * 0.50) * 0.65;

        } else if (sugar === "Normal") {
            totalSum = drinksNum * 0.60;

        } else if (sugar === "Extra") {
            totalSum = drinksNum * 0.70;
            
        }
    }

    if (totalSum > 15) {
        totalSum *= 0.80;
    }

    console.log(`You bought ${drinksNum} cups of ${drink} for ${totalSum.toFixed(2)} lv.`);
}

coffeeMachine (["Cappuccino",
"Normal",
"13"]);