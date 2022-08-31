function nxnMatrix (input) {

    let matrixArr = [];

    for (let i = 0; i < input; i++) {
        
        let rowArr = [];

        for (let j = 0; j < input; j++) {
            rowArr.push(input);
        }

        matrixArr.push(rowArr.join(" "));

    }

    console.log(matrixArr.join("\n"));

}

nxnMatrix (3);