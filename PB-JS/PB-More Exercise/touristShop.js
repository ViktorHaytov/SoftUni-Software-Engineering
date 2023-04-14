function touristShop (input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];

    let totalSum = 0;
    let prodCount = 0;
    let isEnough = true;

    while (command !== "Stop") {
        let productName = command;
        index++;
        let productPrice = Number(input[index]);
        prodCount++;

        if (productPrice > budget) {
            isEnough = false;
            console.log("You don't have enough money!");
            console.log(`You need ${(productPrice - budget).toFixed(2)} leva!`);
            break;
        }

        if (prodCount  % 3 === 0) {
            productPrice *= 0.50;
            budget -= productPrice;
            totalSum += productPrice;
        } else {
            budget -= productPrice;
            totalSum += productPrice;
        }


        index++;
        command = input[index];
    }

    if (isEnough) {
        console.log(`You bought ${prodCount} products for ${totalSum.toFixed(2)} leva.`);
    }

}

touristShop (["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"]);