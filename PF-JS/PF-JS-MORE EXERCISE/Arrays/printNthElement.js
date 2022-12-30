function printNthElement (input) {

    let result = [];
    let nTheNum = input.pop();
    
    for (let index in input) {
        if (index % nTheNum === 0) {
            result.push(input[index]);
        }
    } 

    console.log(result.join(" "));

}

printNthElement (['dsa', 'asd', 'test', 'test', '2']);


