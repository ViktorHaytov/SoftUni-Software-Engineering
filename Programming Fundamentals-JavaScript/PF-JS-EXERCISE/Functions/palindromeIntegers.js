function palindromeIntegers (numberArr) {

    for (let num of numberArr) {
        let currentNum = String(num);
        let reversedNum = String(num).split("").reverse().join("");

        if (currentNum === reversedNum) {
            console.log("true");

        } else {
            console.log("false");
        }
    }

}

palindromeIntegers ([123,323,421,121]);