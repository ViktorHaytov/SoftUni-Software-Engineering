function minNumber (input) {

    let index = 0;
    let command = input[index];
    index++;

    let miNumber = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        let number = Number(command);

        if (miNumber > number) {
            miNumber = number;
        }

        command = input[index];
        index++;

    }

    console.log(miNumber);
}

minNumber (["100","99","80","70","Stop"]);