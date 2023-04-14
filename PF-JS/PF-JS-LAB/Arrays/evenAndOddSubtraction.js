function evenAndOddSubtraction (input) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < input.length; i++) {
        let number = Number(input[i]);

        if (number % 2 === 0) {
            evenSum += number;

        } else {
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}

evenAndOddSubtraction ([1,2,3,4,5,6]);