function bombNumbers2 (arr, bombArr) {

    let bombNum = bombArr[0];
    let power = bombArr[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bombNum) {
            arr[i] = 0;
            for (let j = i; j >= i - power; j--) {
                arr[j] = 0;
            }
            for (let k = i; k <= i + power; k++) {
                arr[k] = 0;
            }
        } 
    }

    let sum = 0;

    for (let a = 0; a < arr.length; a++) {
        sum += arr[a];
    }

    console.log(sum);

}

bombNumbers2 ([1, 4, 4, 2, 8, 9, 1], [9, 3]);