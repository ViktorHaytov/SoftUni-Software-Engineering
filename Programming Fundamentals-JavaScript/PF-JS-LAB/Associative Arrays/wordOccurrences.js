function wordOccurrences (input) {

    let result = {};

    for (let word of input) {
        
        if (!result.hasOwnProperty(word)) {
            result[word] = 1;

        } else {
            let newValue = result[word] + 1
            result[word] = newValue;
        }

    }

    let sortedEntries = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let [k, v] of sortedEntries) {
        console.log(`${k} -> ${v} times`);

    }

}

wordOccurrences (["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);