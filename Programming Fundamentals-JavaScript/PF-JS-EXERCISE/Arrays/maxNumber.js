function maxNumber (input) {

    let result = [];
    let inputL = input.length;

    for (let a = 0; a < inputL; a++) {

        let number1 = input[a];
        let isBiggest = true;

        for (let b = a + 1; b < inputL; b++) {

            let number2 = input[b];

            if (number1 <= number2) {

                isBiggest = false;
            }
        }

        if (isBiggest) {

            result.push(number1);

        }
      
    }

    console.log(result.join(" "));

}

maxNumber ([1, 4, 3, 2]);