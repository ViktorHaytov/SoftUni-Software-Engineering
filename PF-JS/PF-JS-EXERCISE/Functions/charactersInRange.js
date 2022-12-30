function charactersInRange (firstChar, secondChar) {

    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let endChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    let resultArr = [];

    for (let i = startChar + 1; i < endChar; i++ ) {
        let currentChar = String.fromCharCode(i);

        resultArr.push(currentChar);

    }

    console.log(resultArr.join(" "));

}

charactersInRange ("a", "d");