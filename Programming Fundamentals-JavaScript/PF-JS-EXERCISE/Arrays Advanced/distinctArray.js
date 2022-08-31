function distinctArray (inputArr) {

    let resultArr = [];

    for (let el of inputArr) {
        if (!resultArr.includes(el)) {
            resultArr.push(el);

        }
    }

    console.log(resultArr.join(" "));
    
}

distinctArray ([7, 8, 9, 7, 2, 3, 4, 1, 2]);