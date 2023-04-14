function mobileOperator (input) {

    let contractTime = input[0];
    let contractType = input[1];
    let mobileInternet = input[2];
    let months = input[3];

    let totalSum = 0;

    if (contractTime === "one") {
        if (contractType === "Small") {
            totalSum = months * 9.98;

        } else if (contractType === "Middle") {
            totalSum = months * 18.99;

        } else if (contractType === "Large") {
            totalSum = months * 25.98;

        } else if (contractType === "ExtraLarge") {
            totalSum = months * 35.99;

        }
        if (mobileInternet === "yes") {
            if (contractType === "Small") {
                totalSum += months * 5.50;
    
            } else if (contractType === "Middle") {
                totalSum += months * 4.35;
    
            } else if (contractType === "Large") {
                totalSum += months * 4.35;
    
            } else if (contractType === "ExtraLarge") {
                totalSum += months * 3.85;    
            }
        }

    } else if (contractTime === "two") {
        if (contractType === "Small") {
            totalSum = months * 8.58;

        } else if (contractType === "Middle") {
            totalSum = months * 17.09;

        } else if (contractType === "Large") {
            totalSum = months * 23.59;

        } else if (contractType === "ExtraLarge") {
            totalSum = months * 31.79;

        }
        if (mobileInternet === "yes") {
            if (contractType === "Small") {
                totalSum += months * 5.50;
    
            } else if (contractType === "Middle") {
                totalSum += months * 4.35;
    
            } else if (contractType === "Large") {
                totalSum += months * 4.35;
    
            } else if (contractType === "ExtraLarge") {
                totalSum += months * 3.85;    
            }
        }

        totalSum *= 0.9625;

    }

    console.log(`${totalSum.toFixed(2)} lv.`);
    
}

mobileOperator (["two",
"Large",
"no",
"10"]);