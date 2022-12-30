function oddAndEvenSum (num) {

    let numToString = String(num);
    let oddSum = 0;
    let evenSum = 0;

    for (let digit of numToString) {
        digit = Number(digit);
        if (digit % 2 === 0) {
            evenSum += digit;

        } else {
            oddSum += digit;

        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum (1000435);