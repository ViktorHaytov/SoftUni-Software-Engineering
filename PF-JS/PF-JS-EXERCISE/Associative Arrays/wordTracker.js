function wordTracker (input) {

    let result = {};
    let words = input.shift().split(" ");

    for (let word of words) {
        result[word] = 0;
    }

    for (let el of input) {
        
        if (result.hasOwnProperty(el)) {
           let newValue = result[el] + 1;
           result[el] = newValue;
        }
    }

    let sortedEntries = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    
    for (let [k, v] of sortedEntries) {
        console.log(`${k} - ${v}`);
    }

}

wordTracker (['this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);