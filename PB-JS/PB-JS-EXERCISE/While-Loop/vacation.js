function vacation (input) {

    
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let command = input[index];

    let days = 0;
    let spendDays = 0;

    while (availableMoney < neededMoney) {
        
        days++;
        index++;

        if (command === "spend") {
            spendDays++;
            let moneyToSpend = Number(input[index]);
            availableMoney -= moneyToSpend;

            if (availableMoney < 0) {
                availableMoney = 0;
            }

            if (spendDays >= 5) {
                console.log("You can't save the money.");
                console.log(`${days}`);
                break;

            }  
        } else if (command === "save") {
            spendDays = 0;
            let moneyToSave = Number(input[index]);
            availableMoney += moneyToSave;
        }

        index++;
        command = input[index];
       

    }

    if (availableMoney >= neededMoney) {

        console.log(`You saved the money for ${days} days.`);
    }
   
}

vacation (["2000","1000","spend","1200","save","2000"]);