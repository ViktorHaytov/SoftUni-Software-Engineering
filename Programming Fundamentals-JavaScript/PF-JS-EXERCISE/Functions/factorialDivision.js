function factorialDivision (firstNum, secundNum) {

    let firstNumFactorial = 1;
    let secundNumFactorial = 1;

    for (let i = 2; i <= firstNum; i++) {

        firstNumFactorial *= i;

    }
    for (let j = 2; j <= secundNum; j++) {

        secundNumFactorial *= j;

    }

    let result = firstNumFactorial / secundNumFactorial;

    console.log(result.toFixed(2));

}

factorialDivision (6, 2);