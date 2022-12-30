function mirrorWords(input) {

    let pattern = /(@|#)(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(input);
    let mirrorWords = [];
    let pairsCount = 0;
    let validPairsCount = 0;

    while (match !== null) {
        let wordOne = match.groups.wordOne
        let wordTwo = match.groups.wordTwo;
        let reversWordTwo = wordTwo.split("").reverse().join("");

        if (wordOne === reversWordTwo) {
            mirrorWords.push(wordOne.concat(" <=> ", wordTwo));
            validPairsCount++;
        }
        pairsCount++;

        match = pattern.exec(input);
    }

    if (pairsCount > 0) {
        console.log(`${pairsCount} word pairs found!`);

    } else {
        console.log("No word pairs found!");
    }

    if (validPairsCount > 0) {
        console.log("The mirror words are:");
        console.log(`${mirrorWords.join(", ")}`);

    } else {
        console.log("No mirror words!");
    }

}

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);