function passwordValidator (input) {

    let password = input.shift();
    let index = 0;
    let command = input[index];

    while (command !== 'Complete') {
        let tokens = command.split(" ");
        let action = "";
        if (tokens[0] === "Make") {
            action = tokens[0] + " " + tokens[1]

        } else {
            action = tokens[0]
        }
        
        switch (action) {
            case "Make Upper":
                let upperIndex = Number(tokens[2]);
                let letter = password.charAt(upperIndex).toUpperCase();
                password = password.split("");
                password.splice(upperIndex, 1, letter);
                password = password.join("");
                console.log(password);
                break;
            case "Make Lower":
                let lowerIndex = Number(tokens[2]);
                let lowerLetter = password.charAt(lowerIndex).toLowerCase();
                password = password.split("");
                password.splice(lowerIndex, 1, lowerLetter);
                password = password.join("");
                console.log(password);
                break;
            case "Insert":
                let i = Number(tokens[1]);
                let ch = tokens[2];
                if (i >= 0 && i < password.length) {
                    password = password.split("");
                    password.splice(i, 0, ch);
                    password = password.join("");
                    console.log(password);

                }
                break;
            case "Replace":
                let char = tokens[1];
                let value = Number(tokens[2]);
                let chValue = char.charCodeAt();
                let sumValues = chValue + value;
                let symbol = String.fromCharCode(sumValues);
                
               if (password.includes(char)) {
                let pattern = new RegExp(char, "g");
                password = password.replace(pattern, symbol);
                console.log(password);

               } 
                break;
            case "Validation":
                let notValidPattern = /\W+/g;
                let match = password.match(notValidPattern)
                
                if (password.length < 8) {
                    console.log("Password must be at least 8 characters long!");
                }
                if (match) {
                    console.log("Password must consist only of letters, digits and _!");
                }
                for (let el of password) {
                    if (!el.charCodeAt() >= 65 && !el.charCodeAt() <= 90) {
                        console.log("Password must consist at least one uppercase letter!");
                    }
                    // if (!el.charCodeAt() >= 97 && !el.charCodeAt() <= 122) {
                    //     console.log("Password must consist at least one lowercase letter!");
                    // }
                    if (!el.charCodeAt >= 48 && !el.charCodeAt() <= 57) {
                        console.log("Password must consist at least one digit!");
                    }

                }
                
                break;            
        }

        index++;
        command = input[index];
    }

    console.log(password);

}

passwordValidator (['invalidpassword*',
'Add 2 p',
'Replace i -50',

'Make Upper 2',
'Validation',
'Complete']);