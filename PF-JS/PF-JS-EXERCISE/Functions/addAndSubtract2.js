function addAndSubtract2 (numOne, numTwo, numThree) {

    let sum = (numOne, numTwo) => {
        return numOne + numTwo;

    };
    let subtract = (addSum, numThree) => {
        return addSum - numThree;
    };

   let addSum = sum(numOne, numTwo);
   let subtractSum = subtract(addSum, numThree);

   console.log(subtractSum);

    

}

addAndSubtract2 (1, 17, 30);