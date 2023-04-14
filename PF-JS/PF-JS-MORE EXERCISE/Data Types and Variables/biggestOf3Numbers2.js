function biggesOf3Numbers2 (num1, num2, num3) {

    let maxNum = Number.MIN_SAFE_INTEGER;

    if (num1 > maxNum) {
        maxNum = num1;
    }

    if (num2 > maxNum) {
        maxNum = num2;
    }

    if (num3 > maxNum) {
        maxNum = num3;
    }

    console.log(maxNum);
}

biggesOf3Numbers2 (-2, 7, 3);