function addAndSubtract (numOne, numTwo, numThree) {

    let addResult = sum(numOne, numTwo);
    let subtractResult = subtract(addResult, numThree);

    console.log(subtractResult);

    function sum (numOne, numTwo) {
        return numOne + numTwo;
    };
    function subtract (addResult, numThree) {
        return addResult - numThree;
    };

}

addAndSubtract (23, 6, 10);