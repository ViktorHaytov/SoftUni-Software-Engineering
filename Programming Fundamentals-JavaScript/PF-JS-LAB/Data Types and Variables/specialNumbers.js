function specialNumbers (num) {

    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let currentNum = i;

        while (currentNum > 0) {
            let lastDigit = currentNum % 10;
            sum += lastDigit;
            currentNum = parseInt(currentNum / 10);
        }

        let isSpecial = "";

        if (sum === 5 || sum === 7 || sum === 11) {
            isSpecial = "True";
        } else {
            isSpecial = "False";
        }

        console.log(`${i} -> ${isSpecial}`);
    }


}
specialNumbers (20);