function passwordValidator (input) {

    let inputToString = String(input);

    if (!lengthCheck(input)) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!lettersAndNumbers(input)) {
        console.log("Password must consist only of letters and digits");
    }
    if (!digits(input)) {
        console.log("Password must have at least 2 digits");  
    }
    if (lengthCheck(input) && lettersAndNumbers(input) && digits(input)) {
        console.log("Password is valid");
    }

    function digits () {
        let counter = 0;

        for (let symbol of inputToString) {
            let currentChar = symbol.charCodeAt(0);
            
            if (currentChar >= 48 && currentChar <= 57) {
                counter++;
            }
        }

        return counter >= 2 ? true : false;
    }
    function lengthCheck () {
        if (inputToString.length >= 6 && inputToString.length <= 10) {
            return true;

        } else {
            return false;
        } 
    }
    function lettersAndNumbers (input) {
        return /^[A-Za-z0-9]*$/.test(input);

    }
  
}

passwordValidator ("Pa$s$s");