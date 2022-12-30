function addAndSubtract (input) {

    let newArr = [];
    let newArrSum = 0;
    let originalArrSum = 0;
    let inputL = input.length;

    for (let num of input) {
        originalArrSum += num;
    }

    for (let i = 0; i < inputL; i++) {
        let inputNum = input[i];
        let tempNum = 0;

        if (inputNum % 2 === 0) {

            tempNum = inputNum + i;


        } else {

            tempNum = inputNum - i;

        }

        newArr.push(tempNum);
        newArrSum += tempNum;

    }

    console.log(newArr);
    console.log(originalArrSum);
    console.log(newArrSum);

}

addAndSubtract ([5, 15, 23, 56, 35]);