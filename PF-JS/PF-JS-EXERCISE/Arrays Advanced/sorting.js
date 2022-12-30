function sorting (inputArr) {

    
    let sortedArr = inputArr.sort((a, b) => b - a);
    let resultArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (i === sortedArr.length - 1) {
            resultArr.push(sortedArr[i]);
        } else {
            resultArr.push(sortedArr[i]);
            let lastNumber = sortedArr.pop();
            resultArr.push(lastNumber);
        }
    }

    console.log(resultArr.join(" "));

}

sorting ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);