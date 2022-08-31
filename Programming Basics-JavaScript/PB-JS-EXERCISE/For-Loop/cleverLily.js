function cleverLily (input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let moneySum = 0;
    let savedMoney = 0;
    let toysQuantity = 0;
    let theThievingBrother = 0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {

            moneySum += 10;
            savedMoney += moneySum;
            theThievingBrother++;

        } else {

            toysQuantity++;
        }

    }

    let moneyFromToys = toysQuantity * toyPrice;
    let totalSum = (moneyFromToys + savedMoney) - theThievingBrother;
    
    if (totalSum >= washingMachinePrice) {
        console.log(`Yes! ${(totalSum - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSum).toFixed(2)}`);
    }

}

cleverLily (["10", "170.00", "6"]);