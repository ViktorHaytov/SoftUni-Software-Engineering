function thePianist(input) {

    let piecesNumber = Number(input.shift());
    let pieces = input.splice(0, piecesNumber);
    let store = {};
    let index = 0;
    let command = input[index];

    for (let el of pieces) {
        let [piece, composer, key] = el.split("|");

        if (!store.hasOwnProperty(piece)) {
            store[piece] = {};
        }
        store[piece][composer] = key;

    }

    while (command !== "Stop") {
        let token = command.split("|");
        let action = token.shift();

        switch (action) {
            case "Add":
                let piece = token[0];
                let composer = token[1];
                let key = token[2];
                if (store.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`);
                    break;
                }
                store[piece] = {};
                store[piece][composer] = key;
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                break;
            case "Remove":
                let removePiece = token[0];
                if (!store.hasOwnProperty(removePiece)) {
                    console.log(`Invalid operation! ${removePiece} does not exist in the collection.`);
                    break;
                }
                delete store[removePiece];
                console.log(`Successfully removed ${removePiece}!`);
                break;
            case "ChangeKey":
                let changePiece = token[0];
                let changeKey = token[1];
                if (!store.hasOwnProperty(changePiece)) {
                    console.log(`Invalid operation! ${changePiece} does not exist in the collection.`);
                    break;
                }

                for (let [keyComposer, valueKey] of Object.entries(store[changePiece])) {
                    store[changePiece][keyComposer] = changeKey;
                }
                console.log(`Changed the key of ${changePiece} to ${changeKey}!`);
        }

        index++;
        command = input[index];
    }

    for (let piece of Object.keys(store)) {
        for (let [keyComposer, valueKey] of Object.entries(store[piece])) {
            console.log(`${piece} -> Composer: ${keyComposer}, Key: ${valueKey}`);
        }
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);