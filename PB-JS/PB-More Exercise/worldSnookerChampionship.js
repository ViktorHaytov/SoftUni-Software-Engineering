function worldSnookerChampionship (input) {

    let stage = input[0];
    let ticketTipe = input[1];
    let ticketNum = Number(input[2]);
    let photo = input[3];

    let sum = 0;

    if (ticketTipe === "Standard") {
        if (stage === "Quarter final") {
            sum = ticketNum * 55.50;

        } else if (stage === "Semi final") {
            sum = ticketNum * 75.88;

        } else if (stage === "Final") {
            sum = ticketNum * 110.10;

        }

    } else if (ticketTipe === "Premium") {
        if (stage === "Quarter final") {
            sum = ticketNum * 105.20;

        } else if (stage === "Semi final") {
            sum = ticketNum * 125.22;

        } else if (stage === "Final") {
            sum = ticketNum * 160.66;

        }

    } else if (ticketTipe === "VIP") {
        if (stage === "Quarter final") {
            sum = ticketNum * 118.90;

        } else if (stage === "Semi final") {
            sum = ticketNum * 300.40;

        } else if (stage === "Final") {
            sum = ticketNum * 400;

        }
    }

    if (sum > 4000) {
        sum *= 0.75;

    } else if (sum > 2500) {
        sum *= 0.90;
        if (photo === "Y") {
            sum += (ticketNum * 40);
        }

    } else {
        if (photo === "Y") {
            sum += (ticketNum * 40);
        }
    }

    console.log(`${sum.toFixed(2)}`);
}

worldSnookerChampionship (["Quarter final",
"Standard",
"11",
"N"]);