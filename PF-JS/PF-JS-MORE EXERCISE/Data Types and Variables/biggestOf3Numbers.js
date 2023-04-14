function biggestOf3Numbers (input) {

    
    let parameter = input;
    
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < parameter.length; i++) {
        let number = Number(input[i]);

        if (number > maxNum) {
            maxNum = number;
        }
    }

    console.log(maxNum);
}

biggestOf3Numbers (["130", "5", "99"]);