function activationKeys(input) {

    let rawKey = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== "Generate") {
        let tokens = command.split(">>>");
        let action = tokens.shift();

        switch (action) {
            case "Contains":
                let substring = tokens[0];
                if (rawKey.includes(substring)) {
                    console.log(`${rawKey} contains ${substring}`);

                } else {
                    console.log("Substring not found!");
                }
                break;
            case "Flip":
                let upperOrLower = tokens[0];
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                let substr = rawKey.slice(startIndex, endIndex);

                if (upperOrLower === "Upper") {
                    let toUpper = substr.toUpperCase()
                    rawKey = rawKey.replace(substr, toUpper);
                    console.log(rawKey);

                } else if (upperOrLower === "Lower") {
                    let toLower = substr.toLowerCase();
                    rawKey = rawKey.replace(substr, toLower);
                    console.log(rawKey);

                }
                break;
            case "Slice":
                let startI = Number(tokens[0]);
                let endI = Number(tokens[1]);
                let characters = rawKey.substring(startI, endI);
                rawKey = rawKey.replace(characters, "");
                console.log(rawKey);
                break;

        }

        index++;
        command = input[index];
    }

    console.log(`Your activation key is: ${rawKey}`);

}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);