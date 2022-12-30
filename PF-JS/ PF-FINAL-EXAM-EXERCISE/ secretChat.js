function secretChat(input) {

    let message = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== 'Reveal') {
        let tokens = command.split(":|:");
        let action = tokens.shift();

        switch (action) {
            case "InsertSpace":
                let i = Number(tokens[0]);
                let firstPart = message.slice(0, i);
                let secondPart = message.slice(i);
                message = firstPart + " " + secondPart;
                console.log(message);
                break;
            case "Reverse":
                let substring = tokens[0];
                if (message.includes(substring)) {
                    message = message.replace(substring, "");
                    let reversed = substring.split("").reverse().join("");
                    message = message + reversed;
                    console.log(message);

                } else {
                    console.log("error");
                }
                break;
            case "ChangeAll":
                let substr = tokens[0];
                let replacement = tokens[1];
                let pattern = new RegExp(substr, "g");
                message = message.replace(pattern, replacement);
                console.log(message);
                break;
        }

        index++;
        command = input[index];
    }

    console.log(`You have a new text message: ${message}`);

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);