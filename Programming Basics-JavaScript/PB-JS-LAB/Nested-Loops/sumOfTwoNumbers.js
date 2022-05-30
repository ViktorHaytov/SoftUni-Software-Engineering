function sumOfTwoNumbers (input) {

    let startNumber = Number(input[0]);
    let andNumber = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let sum = 0;
    let isFound = false;

    for (let a = startNumber; a <= andNumber; a++) {
        for (let b = startNumber; b <= andNumber; b++) {

            combinations++;

             sum = a + b;

            if (sum === magicNumber) {
                isFound = true;
                console.log(`Combination N:${combinations} (${a} + ${b} = ${a + b})`);
                break;

            } 

        }

        if (isFound) {
            break;
        }

    }

    if (!isFound) {

        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }

    


}

sumOfTwoNumbers (["1","10","5"]);