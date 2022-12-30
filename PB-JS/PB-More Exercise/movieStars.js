function movieStars (input) {

    let index = 0;
    let budget = Number(input[index]);
    index++;
    let command = input[index];

    let lastSalary = 0;
    let isSufficient = true;

    while (command !== "ACTION") {
        let nameSymbol = Number(command.length);

        if (nameSymbol <= 15) {
            index++;
            let salary = Number(input[index]);
            lastSalary += salary;   
          
        } else {
            let symbolSalary = budget * 0.20;
            lastSalary += symbolSalary;
        }


        if(budget >= lastSalary) {
            budget -= lastSalary;
            lastSalary = 0;
        } else {
            isSufficient = false;
            console.log(`We need ${(lastSalary - budget).toFixed(2)} leva for our actors.`);
            break;
        }

        index++;
        command = input[index];
    }

    if (isSufficient) {
        console.log(`We are left with ${(budget - lastSalary).toFixed(2)} leva.`);
    }
}

movieStars (["90000",
"Christian Bale",
"70000.50",
"Leonard DiCaprio",
"Kevin Spacey",
"24000.99"]);