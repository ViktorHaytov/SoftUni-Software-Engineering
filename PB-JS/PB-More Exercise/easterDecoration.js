function easterDecoration (input) {

    let index = 0;
    let customerNum = Number(input[index]);

    let sum = 0;

    for (let i = 0; i < customerNum; i++) {
        index++
        let command = input[index];

        let currentSum = 0;
        let currentProductsCount = 0;

        while (command !== "Finish") {
            let product = command;

            currentProductsCount++;

            if (product === "basket") {
                currentSum += 1.50;
                
            } else if (product === "wreath") {
                currentSum += 3.80;

            } else if (product === "chocolate bunny") {
                currentSum += 7;

            }
            
            index++;
            command = input[index];
        }

        if (currentProductsCount % 2 === 0) {
            currentSum *= 0.80;
        }

        sum += currentSum;
        console.log(`You purchased ${currentProductsCount} items for ${currentSum.toFixed(2)} leva.`);

    }

    console.log(`Average bill per client is: ${(sum / customerNum).toFixed(2)} leva.`);
}

easterDecoration (["2",
"basket",
"wreath",
"chocolate bunny",
"Finish",
"wreath",
"chocolate bunny",
"Finish"]);