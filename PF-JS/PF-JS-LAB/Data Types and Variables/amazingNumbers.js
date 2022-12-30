function amazingNumbers (num) {

    let numToString = String(num);
    let sum = 0;
    let isAmazing = false;

    for (let i = 0; i < numToString.length; i++) {
        let digits = Number(numToString[i]);

        sum += digits;
    }

    let sumToString = String(sum);

    for (let i = 0; i < sumToString.length; i++) {
        let digit = Number(sumToString[i]);

        if (digit === 9) {
            isAmazing = true;
            break;
        }
    }

    let output = isAmazing ? "True" : "False";

    console.log(`${num} Amazing? ${output}`);

}

amazingNumbers (1233);