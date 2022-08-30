function pascalCaseSplitter (input) {

    let result = [];
    let index = 1;
    let end = input.length;
    let cut = 0;


    while (index < end) {
        if (input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90) {

            result.push(input.slice(cut, index));
            cut = index;

        }

        index++;
    }
    result.push(input.slice(cut, index));

    console.log(result.join(", "));

}

pascalCaseSplitter ('HoldTheDoor');