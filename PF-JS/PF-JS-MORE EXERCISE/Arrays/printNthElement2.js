function printNthElement2 (input) {

    let result = [];
    let newInputArr = [];
    let nTheNum = 0;
    let inputL = input.length;
    
    for (let i = inputL - 1; i >= 0; i--) {
        newInputArr.push(input[i]);
        
    }

    for (let i = inputL - 1; i >= 0; i--) {
        nTheNum += Number(input[i]);
        break;
    }

    for (let i = 0; i < newInputArr.length; i++) {
        newInputArr.shift();
        break;
    }

    newInputArr.reverse();

    for (let i = 0; i < newInputArr.length; i += nTheNum) {
        result.push(newInputArr[i]);

    } 

    console.log(result.join(" "));

}

printNthElement2 (['dsa', 'asd', 'test', 'test', '2']);