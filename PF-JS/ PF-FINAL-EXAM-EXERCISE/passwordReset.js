function passwordReset(input) {

    let password = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== "Done") {
        let tokens = command.split(" ");
        let action = tokens.shift();

        switch (action) {
            case "TakeOdd":
                let newRawPassword = "";
                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newRawPassword += password[i];
                    }
                }
                password = newRawPassword;
                console.log(newRawPassword);
                break;
            case "Cut":
                let cutIndex = Number(tokens[0]);
                let cutLength = Number(tokens[1]);
                let occurrence = password.substr(cutIndex, cutLength);
                password = password.replace(occurrence, "");
                console.log(password);
                break;
            case "Substitute":
                let substring = tokens[0];
                let substitute = tokens[1];
                let pattern = new RegExp(substring, "g");

                if (password.includes(substring)) {
                    password = password.replace(pattern, substitute);
                    console.log(password);

                } else {
                    console.log("Nothing to replace!");
                }
                break;
        }

        index++;
        command = input[index];
    }


    console.log(`Your password is: ${password}`);

}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);