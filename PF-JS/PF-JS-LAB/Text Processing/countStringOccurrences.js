function countStringOccurrences (string, word) {

    let stringArr = string.split(" ");
    let count = 0;

    for (let el of stringArr) {

        if (el === word) {
            count++;
        }

    }

    console.log(count);

}

countStringOccurrences ('This is a word and it also is a sentence', 'is');