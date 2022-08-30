function journey (input) {

    let budget = Number(input[0]);
    let seasen = input[1];

    let sum = 0;
    

    if (budget <= 100) {
        console.log("Somewhere in Bulgaria");
        if (seasen === "summer") {
            sum = budget * 0.30;
           console.log(`Camp - ${sum.toFixed(2)}`);

        }else if (seasen === "winter") {
            sum = budget * 0.70;
            console.log(`Hotel - ${sum.toFixed(2)}`);
        }

    }else if (budget <= 1000) {
        console.log("Somewhere in Balkans");
        if (seasen === "summer") {
            sum = budget * 0.40;
            console.log(`Camp - ${sum.toFixed(2)}`);

        }else if (seasen === "winter") {
            sum = budget * 0.80;
            console.log(`Hotel - ${sum.toFixed(2)}`);
            
        }

    }else if (budget > 1000) {
        console.log("Somewhere in Europe");
        if (seasen === "summer") {
            sum = budget * 0.90;
            console.log(`Hotel - ${sum.toFixed(2)}`);
            

        }else if (seasen === "winter") {
            sum = budget * 0.90;
             console.log(`Hotel - ${sum.toFixed(2)}`);
        }

    }

}

journey (["1500", "summer"]);