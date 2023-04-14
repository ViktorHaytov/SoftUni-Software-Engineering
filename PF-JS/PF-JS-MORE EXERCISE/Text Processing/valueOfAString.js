function valueOfAString (input) {

    let text = input[0];
    let command = input[1];
    let sum = 0;

    for (let el of text) {
        
        switch (command) {
            case "LOWERCASE":
                if (el.charCodeAt() >= 97 && el.charCodeAt() <= 122) {
                   let num = el.charCodeAt()
                   sum += num;

                }
                break;
            case "UPPERCASE":
                if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
                    let num = el.charCodeAt()
                   sum += num;

                }
                break;    
        }
    }

    console.log(`The total sum is: ${sum}`);  

}

valueOfAString (['AC/DC', 'UPPERCASE']);