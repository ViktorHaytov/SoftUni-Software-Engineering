function series (input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let serNumber = Number(input[index]);

    let totalSum = 0;

    for (let i = 0; i < serNumber; i++) {
        index++;
        let name = input[index];
        index++;
        let price = Number(input[index]);

        switch (name) {
            case "Thrones":
                price *= 0.50;
                break;
            case "Lucifer":
                price *= 0.60;
                break;
            case "Protector":
                price *= 0.70;
                break;
            case "TotalDrama":
                price *= 0.80;
                break;
            case "Area":
                price *= 0.90;
                break;               
        }

        totalSum += price;
    }

    if (budget >= totalSum) {
        console.log(`You bought all the series and left with ${(budget - totalSum).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalSum - budget).toFixed(2)} lv. more to buy the series!`);
    }
}

series (["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"]);