function sumDigits (num) {

    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let currentDigit = Number(numToString[i]);

       sum += currentDigit;

    }

    console.log(sum);

}

sumDigits (245678);