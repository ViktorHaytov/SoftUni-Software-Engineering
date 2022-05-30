function deerOfSanta (input) {

    let days = Number(input[0]);
    let food = Number(input[1]);
    let food1 = Number(input[2]);
    let food2 = Number(input[3]);
    let food3 = Number(input[4]);

    let foodNeeded1 = days * food1;
    let foodNeeded2 = days * food2;
    let foodNeeded3 = days * food3;

    let totalFoodNeeded = foodNeeded1 + foodNeeded2 + foodNeeded3;

    if (totalFoodNeeded < food) {
        console.log(`${Math.floor(food - totalFoodNeeded)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalFoodNeeded - food)} more kilos of food are needed.`);
    }

}

deerOfSanta (["2",
"10",
"1",
"1",
"2"]);