function carWash (inputArr) {

    let result = 0;

    for (let command of inputArr) {
        
        switch (command) {
            case "soap":
                result += 10;
                break;
            case "water":
                result *= 1.20;
                break;
            case "vacuum cleaner":
                result *= 1.25;
                break;
            case "mud":
                result *= 0.90;
                break;     
        }
    }

    return `The car is ${result.toFixed(2)}% clean.`;
}

console.log(carWash (['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));