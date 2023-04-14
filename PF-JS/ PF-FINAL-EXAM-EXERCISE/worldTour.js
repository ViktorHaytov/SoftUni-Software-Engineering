function worldTour (input) {

    let initialString = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== "Travel") {
        let token = command.split(":");
        let action = token.shift();

        switch (action) {
            case "Add Stop":
                let addIndex = Number(token[0]);
                let addString = token[1];
                if (addIndex < 0 || addIndex >= initialString.length) {
                    console.log(initialString);
                    break;
                }
                let firstPart = initialString.slice(0, addIndex);
                let secondPart = initialString.slice(addIndex);
                initialString = firstPart + addString + secondPart;
                console.log(initialString);
                break;
            case "Remove Stop":
                 let startIndex = Number(token[0]);
                 let endIndex = Number(token[1]);
                 if (startIndex < 0 || endIndex >= initialString.length) {
                    console.log(initialString);
                    break;
                 }

                 let subStr = initialString.substring(startIndex, endIndex + 1);
                 initialString = initialString.replace(subStr, "");
                 console.log(initialString);
                break;
            case "Switch":
                let oldString = token[0];
                let newString = token[1];
                let pattern = new RegExp(oldString, "g");
                initialString = initialString.replace(pattern, newString);
                console.log(initialString);
                break;
        }
        index++;
        command = input[index];
    }

    console.log(`Ready for world tour! Planned stops: ${initialString}`);

}

worldTour (["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);