function revealWords (words, string) {

    let replaceWords = words.split(", ");
    let stringArr = string.split(" ");

    for (let word of replaceWords) {
        let wordLength = word.length;

        for (let el of stringArr) {

            if (el.includes("*") && el.length === wordLength) {
                string = string.replace(el, word);
            }

        }

    }

    console.log(string);

}

revealWords ('great, learning',
'softuni is ***** place for ******** new programming languages');