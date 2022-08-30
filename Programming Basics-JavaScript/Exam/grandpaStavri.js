function grandpaStavri (input) {

    let index = 0;
    let n = Number(input[index]);

    let literSum = 0;
    let totalSumDegLt = 0;


    for (let i = 1; i <= n; i++) {
        index++;
        let quantityLt = Number(input[index]);
        index++;
        let degrees = Number(input[index]);

        literSum += quantityLt;
        totalSumDegLt += quantityLt * degrees;
    
    }

    let avg = totalSumDegLt / literSum;

    if (avg < 38) {
        console.log(`Liter: ${literSum.toFixed(2)}`);
        console.log(`Degrees: ${avg.toFixed(2)}`);
        console.log("Not good, you should baking!");

    } else if (avg < 42) {
        console.log(`Liter: ${literSum.toFixed(2)}`);
        console.log(`Degrees: ${avg.toFixed(2)}`);
        console.log("Super!");

    } else {
        console.log(`Liter: ${literSum.toFixed(2)}`);
        console.log(`Degrees: ${avg.toFixed(2)}`);
        console.log("Dilution with distilled water!");

    }

 
}

grandpaStavri (["3",
"100",
"45",
"50",
"55",
"150",
"36"]);