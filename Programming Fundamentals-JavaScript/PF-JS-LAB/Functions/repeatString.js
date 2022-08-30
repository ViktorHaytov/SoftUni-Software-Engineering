function repeatString (text, repeatNum) {

    let result = "";

    for (let i = 0; i < repeatNum; i++) {
        result += text;

    }

    return result;
}

console.log(repeatString ("abc", 3));