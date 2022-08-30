function mergeArrays (firstArr, secondArr) {

    let result = [];
    let firstArrL = firstArr.length;

    for (let i = 0; i < firstArrL; i++) {

        if (i % 2 === 0) {
            firstArr[i] = Number(firstArr[i]);
            secondArr[i] = Number(secondArr[i]);

            result.push(firstArr[i] + secondArr[i]);

        } else {

            result.push(firstArr[i] + secondArr[i]);

        }
    }

    console.log(result.join(" - "));

}

mergeArrays (['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);