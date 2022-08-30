function substring (inputString, startIndex, count) {

    let endIndex = startIndex + count;

    let string = inputString.substring(startIndex, endIndex)
    console.log(string);
}

substring ('ASentence', 1, 8);