function treasureFinder (input) {

    let keySecuence = input.shift().split(" ");
    let keyIndex = 0;
    let index = 0;
    let command = input[index];
    let result = [];

    while (command !== "find") {
        let currentResult = "";
        
        for (let i = 0; i < command.length; i++) {
            let key = Number(keySecuence[keyIndex]);
            keyIndex++
           
            let codeChar = command[i].charCodeAt() - key;
            
            if (keyIndex === keySecuence.length) {
                keyIndex = 0;
            }

            currentResult += String.fromCharCode(codeChar);

        }
        
        result.push(currentResult);
        keyIndex = 0;

        index++;
        command = input[index];
    }

    for (let el of result) {
        let type = el.split("&")[1];
        let coordinates = el.split("<")[1];
        coordinates = coordinates.replace(">","")
       
        console.log(`Found ${type} at ${coordinates}`);
    }

}

treasureFinder (["1 2 1 3", "ikegfp'jpne)bv=41P83X@" , "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA" ,"find"]);