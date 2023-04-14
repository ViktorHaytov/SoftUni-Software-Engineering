function equalArrays (firstArr, secondArr) {

    let sumArr = 0;
    let isIdentical = true;

    
    for (let i = 0; i < firstArr.length; i++) {
        let equalElement = firstArr[i].includes(secondArr[i]);
        firstArr[i] = Number(firstArr[i]);

        if (equalElement) {
            sumArr += firstArr[i];
            
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;

        } 
    }

    if (isIdentical) {

        console.log(`Arrays are identical. Sum: ${sumArr}`);

    }
}

equalArrays (['1'], ['10']);