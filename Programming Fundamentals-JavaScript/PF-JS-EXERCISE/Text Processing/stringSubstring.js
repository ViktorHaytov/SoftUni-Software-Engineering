function stringSubstring (word, text) {

    let textArr = text.split(" ");
    let isFound = false;

    for (let el of textArr) {
        el = el.toLowerCase();

        if (el === word) {
            isFound = true;
        }

    }

    if (isFound) {
        console.log(word);

    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring ('javascript',
'JavaScript is the best programming language');