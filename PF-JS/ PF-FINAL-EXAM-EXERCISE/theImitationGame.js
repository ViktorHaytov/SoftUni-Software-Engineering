function theImitationGame(input) {

    let decrypted = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== 'Decode') {
        let token = command.split("|");
        let instruction = token.shift();

        switch (instruction) {
            case "Move":
                let char = decrypted.slice(0, token[0]);
                decrypted = decrypted.replace(char, "");
                decrypted = decrypted.concat(char);

                break;
            case "Insert":
                let insertIndex = Number(token[0]);
                let value = token[1];
                let insertValue = decrypted.split("");
                insertValue.splice(insertIndex, 0, value);
                insertValue = insertValue.join("");
                decrypted = insertValue;
                break;
            case "ChangeAll":
                let firstCh = token[0];
                let secondCh = token[1];
                for (let el of decrypted) {
                    if (el === firstCh) {
                        decrypted = decrypted.replace(el, secondCh);

                    }
                }
                break;

        }

        index++;
        command = input[index];
    }

    console.log(`The decrypted message is: ${decrypted}`);

}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',]);