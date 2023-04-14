function bombNumbers (sequenceArr, specialArr) {

    let bombNumber = specialArr.shift();
    let detonatePower = specialArr.shift();

    while (sequenceArr.includes(bombNumber)) {
        let index = sequenceArr.indexOf(bombNumber);

        let startIndex = Math.max(0, index - detonatePower);
        let length = detonatePower * 2 + 1;

         sequenceArr.splice(startIndex, length);

    }     
        
    let result = 0;

    for (let el of sequenceArr) {
        result += el;
    }

    console.log(result);

}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]);