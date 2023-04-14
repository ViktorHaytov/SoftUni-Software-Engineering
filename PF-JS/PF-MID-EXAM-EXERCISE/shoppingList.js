function shoppingList (input) {

    let list = input.shift().split("!");

    let index = 0;
    let command = input[index];

    while (command !== "Go Shopping!") {
        command = command.split(" ")
        let currentComand = command[0];
        let product = command[1];
        let newProduct = command[2];

        switch (currentComand) {
            case "Urgent":
                if (list.includes(product)) {
                    index++;
                    command = input[index];
                    continue;

                } else {
                    list.unshift(product);
                }
                break;
            case "Unnecessary":
                if (list.includes(product)) {
                    list = list.filter(el => el !== product);

                } else {
                    index++;
                    command = input[index];
                    continue;
                }
                break;
            case "Correct":
                if (list.includes(product)) {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i] === product) {
                            list[i] = newProduct;
                            
                        }
                    }
                } else {
                    index++;
                    command = input[index];
                    continue;
                }
                break;
            case "Rearrange":
                if (list.includes(product)) {
                    for (let i = 0; i < list.length; i++) {
                        if (list[i] === product) {
                          let addToTheFinal = list.splice(i, 1);
                          list.push(addToTheFinal);
                         
                        }
                    }
                } else {
                    index++;
                    command = input[index];
                    continue;
                }
                break;
        }

        index++;
        command = input[index];

    }

    console.log(list.join(", "));

}

shoppingList (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);