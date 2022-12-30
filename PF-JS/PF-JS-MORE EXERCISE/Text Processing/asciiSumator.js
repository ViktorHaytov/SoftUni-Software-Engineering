function asciiSumator (input) {

    let firstChar = input[0].charCodeAt();
    let secondChar = input[1].charCodeAt();
    let startNum = Math.min(firstChar, secondChar);
    let endNum = Math.max(firstChar, secondChar);
    let text = input[2];
    let sum = 0;
    
    for (let i = 0; i < text.length; i++) {
        let charCode = text[i].charCodeAt();

        if (charCode > startNum && charCode < endNum) {
            sum += charCode;
        }

    }

    console.log(sum);

}

asciiSumator (["a", "1", "jfe392$#@j24ui9ne#@$"]);