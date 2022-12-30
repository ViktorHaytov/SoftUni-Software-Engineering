function equalSumEvenOddPosition (input) {
    
    let firstNum = Number(input[0]);
    let secundNum = Number(input[1]);

    let printNum = " ";

    for (let a = firstNum; a <= secundNum; a++) {

        let currentNum = "" + a;
        let evenSum = 0;
        let oddSum = 0;

        for (let b = 0; b < currentNum.length; b++) {
            let currentDigit = Number(currentNum.charAt(b));

            if(b % 2 === 0){
                evenSum += currentDigit;

            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printNum += `${a} `;
        }
    }

    console.log(printNum);
}

equalSumEvenOddPosition (["123456","124000"]);