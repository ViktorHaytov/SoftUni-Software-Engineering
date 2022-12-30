function condenseArrayToNumber (input) {

    let resultArr = [];

    for (let num of input) {

        resultArr.push(num);

    }

    while (resultArr.length > 1) {
        let tempArr = [];

        for (let i = 0; i < resultArr.length - 1; i++) {
            tempArr[i] = resultArr[i] + resultArr[i + 1];

        }

        resultArr = tempArr
    }

    console.log(resultArr.join());

}

condenseArrayToNumber ([5,0,4,1,2]);