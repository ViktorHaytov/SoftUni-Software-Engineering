function sumFirstAndLast (arr) {

    let firstNum = arr[0];
    let lastNum = arr[arr.length - 1];

    return Number(firstNum) + Number(lastNum);
}

console.log(sumFirstAndLast(['20', '30', '40']));