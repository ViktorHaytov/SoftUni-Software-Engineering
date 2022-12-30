function integerAndFloat (firstNum, secondNum, thirdNum) {

    let sum = firstNum + secondNum + thirdNum;
    let sumToString = String(sum);

    let isFloat = false;

    for (let i = 0; i < sumToString.length; i++) {
        let currentChar = sumToString[i];

        if (currentChar === ".") {
            isFloat = true;

        }
    }

    let output = isFloat ? "Float" : "Integer";

    console.log(`${sum} - ${output}`);
}

integerAndFloat (9, 100, 1.1);