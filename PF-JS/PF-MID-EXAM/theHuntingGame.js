function theHuntingGame (input) {

    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let water = Number(input.shift());
    let food = Number(input.shift());

    let totalWater = days * players * water;
    let totalFood = days * players * food;
    let isEnoughEnergy = true;

    let d = 0;

    for (let i = 0; i < input.length; i++) {
        let lossEnergy = Number(input[i]);
        d += 1

        energy -= lossEnergy;
   
        if (d % 2 === 0) {
            if (energy <= 0) {
                console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
                isEnoughEnergy = false;
                break;
    
            }
            totalWater = totalWater * 0.70;
            energy = energy * 1.05;
        }
        if (d % 3 === 0) {
            if (energy <= 0) {
                console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
                isEnoughEnergy = false;
                break;
    
            }
            totalFood = totalFood - (totalFood / players);
            energy = energy * 1.10;

        }  

        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            isEnoughEnergy = false;
            break;

        }
    }

    if (isEnoughEnergy) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }

}

theHuntingGame (["10","7","5035.5","11.3","7.2","942.3","500.57","520.68","540.87",
"505.99","630.3","784.20","321.21","456.8","330"]);