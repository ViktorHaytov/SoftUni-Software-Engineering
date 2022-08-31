function sumFirstAndLastArrayElements (input) {

    let firstNum = input[0];
    let lastNum = input[input.length - 1];
    let sum = firstNum + lastNum;

    console.log(sum);
}

sumFirstAndLastArrayElements ([20, 30, 40]);