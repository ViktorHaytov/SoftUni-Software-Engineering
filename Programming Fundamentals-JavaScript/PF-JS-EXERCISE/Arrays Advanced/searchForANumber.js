function searchForANumber (numberArr, commandsArr) {

    let sortedArr = numberArr.slice(0 ,commandsArr[0]);
    let numOcurrsCount = 0;

    for (let i = 0; i < commandsArr[1]; i++) {
        sortedArr.shift()
    }

    for (let el of sortedArr) {
        if (el === commandsArr[2]) {
            numOcurrsCount++;
        }
    }

    console.log(`Number ${commandsArr[2]} occurs ${numOcurrsCount} times.`);  

}

searchForANumber ([5, 2, 3, 4, 1, 6], [5, 2, 3]);