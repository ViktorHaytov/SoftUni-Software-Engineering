function maxNumber (input) {

    let index = 0;
    let command = input[index];
    index++;

    let maNumber = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        let number = Number(command);

        if (maNumber < number) {
            maNumber = number;
        }

        command = input[index];
        index++;
    }

    console.log(maNumber);
}

maxNumber (["100","99","80","70","Stop"]);