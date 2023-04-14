function numberModification (num) {

    let numToString = String(num);
    let sum = 0;

    let newNum = n => (numToString += n);

    while (sum / numToString.length <= 5) {

        for (let i = 0; i < numToString.length; i++) {
            let n = Number(numToString[i]);
            sum += n;
        }

        if (sum / numToString.length <= 5) {
            newNum(9);
            sum = 0;
        }

    }

    console.log(numToString);
    
}

numberModification (101);