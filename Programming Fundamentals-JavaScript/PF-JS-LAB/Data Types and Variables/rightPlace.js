function rightPlace (firstStr, character, secondStr) {

    let result = "";

    for (let i = 0; i < firstStr.length; i++) {
        let currentChar = firstStr[i];

        if (currentChar === "_") {
            currentChar = character;
            result += currentChar;

        } else {
            result += currentChar;
        }
    }

    let output = result === secondStr ? "Matched" : "Not Matched";
    
    console.log(output);

}

rightPlace ('Str_ng', 'i', 'String');