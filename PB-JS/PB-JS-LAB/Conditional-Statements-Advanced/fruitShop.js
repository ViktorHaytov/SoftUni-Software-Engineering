function fruitShop (input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let totalSum = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            
        if (fruit === "banana") {
            totalSum = quantity * 2.50;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "apple") {
            totalSum = quantity * 1.20;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "orange") {
            totalSum = quantity * 0.85;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "grapefruit") {
            totalSum = quantity * 1.45;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "kiwi") {
            totalSum = quantity * 2.70;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "pineapple") {
            totalSum = quantity * 5.50;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "grapes") {
            totalSum = quantity * 3.85;
            console.log(`${totalSum.toFixed(2)}`);
        }else {
            console.log("error");
        } 
    } else if (day === "Saturday" || day === "Sunday") {

        if (fruit === "banana") {
            totalSum = quantity * 2.70;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "apple") {
            totalSum = quantity * 1.25;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "orange") {
            totalSum = quantity * 0.90;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "grapefruit") {
            totalSum = quantity * 1.60;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "kiwi") {
            totalSum = quantity * 3.00;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "pineapple") {
            totalSum = quantity * 5.60;
            console.log(`${totalSum.toFixed(2)}`);
        }else if (fruit === "grapes") {
            totalSum = quantity * 4.20;
            console.log(`${totalSum.toFixed(2)}`);
        }else {
            console.log("error");
        } 
    }else {
        console.log("error");
    }


}

fruitShop (["tomato", "Monday", "0.5"]);