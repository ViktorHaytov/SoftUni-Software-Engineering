function passwordGenerator(input) {

    let concatWords = input[0] + input[1];
    let symbolsWord = input[2].toUpperCase();

    let result = "";
    let index = 0;

    for (let i = 0; i < concatWords.length; i++) {

        if (concatWords[i] === "a" || concatWords[i] === "e" ||
            concatWords[i] === "i" || concatWords[i] === "o" ||
            concatWords[i] === "u") {
            result += symbolsWord[index];
            index++;
            if (index === symbolsWord.length) {
                index = 0;
            }

        } else {
            result += concatWords[i];
        }
    }

    let password = result.split("").reverse().join("");

    console.log(`Your generated password is ${password}`);

}

passwordGenerator([
    'areyousureaboutthisone',
    'notquitebutitrustyou',
    'disturbed']);