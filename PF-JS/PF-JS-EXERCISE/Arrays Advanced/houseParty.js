function houseParty (inputArr) {

    let nameArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i].split(" ");
        let name = command[0];
        
        if(command.length === 3) {
            if (nameArr.includes(name)) {
                console.log(`${name} is already in the list!`);

            } else {
                nameArr.push(name);
            }

        } else {
            if (!nameArr.includes(name)) {
                console.log(`${name} is not in the list!`);

            } else {
                let index = nameArr.indexOf(name);
                nameArr.splice(index,1);

            }
            
        } 
    }

    console.log(nameArr.join("\n"));

}

houseParty (['Allie is going!','George is going!','John is not going!','George is not going!']);