function aMinerTask (input) {

    let result = {};
    
    for (let i = 0; i < input.length; i++) {
        let count = i + 1;
        
        if (count % 2 !== 0) {
            if (!result.hasOwnProperty(input[i])) {
                result[input[i]] = Number(input[i + 1]);

            } else {
                let newQuantity = result[input[i]];
                result[input[i]] = newQuantity + Number(input[i + 1])
            }

        }  

    }

    for (let key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
    
}

aMinerTask ([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ]);