function rightPlace2 (firstStr, character, secondStr) {

    let result = firstStr.replace("_", character);

    let output = result === secondStr ? "Matched" : "Not Matched";

    console.log(output);
}

rightPlace2 ('Str_ng', 'I', 'Strong');