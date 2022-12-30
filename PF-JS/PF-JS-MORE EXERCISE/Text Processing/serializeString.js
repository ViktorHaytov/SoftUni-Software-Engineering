function serializeString (input) {

    let text = input[0];
    let obj = {};

    for (let i = 0; i < text.length; i++) {
        let letter = text[i];
        let index = i;
        
        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = new Set();

        }

        obj[letter].add(index);

    }

    for (let [key, value] of Object.entries(obj)) {
        value = Array.from(value);
        
        if (value.length > 1) {
            console.log(`${key}:${value.join("/")}`);

        } else {
            console.log(`${key}:${value.join()}`);
        }
    }
    
}

serializeString (["avjavamsdmcalsdm"]);