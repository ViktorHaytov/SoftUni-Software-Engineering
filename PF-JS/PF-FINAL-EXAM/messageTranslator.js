function messageTranslator (input) {

    let n = Number(input.shift());
    let pattern = /!(?<command>[A-Z][a-z]{2,})!\:\[(?<text>[A-Za-z]{8,})\]/g;

    for (let i = 0; i < n; i++) {
        let match = pattern.exec(input[i]);
        let asciiNumbers = [];
        let command = "";
        let isValid = false;

        if (match) {
            let text = match.groups.text;
            for (let letter of text) {
                let num = letter.charCodeAt();
                asciiNumbers.push(num);
                command = match[1];
                isValid = true;

            }

        } else {
            console.log("The message is invalid");

        }
        if (isValid) {

            console.log(`${command}: ${asciiNumbers.join(" ")}`);
        }
        
    }

}

messageTranslator (["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"]);