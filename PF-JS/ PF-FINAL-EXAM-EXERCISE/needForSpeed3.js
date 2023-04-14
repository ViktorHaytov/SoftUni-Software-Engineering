function needForSpeed3(input) {

    let carsNumber = Number(input.shift());
    let cars = input.splice(0, carsNumber);
    let carsInfo = {};
    let index = 0;
    let command = input[index];

    for (let el of cars) {
        let [car, mileage, fuel] = el.split("|");

        carsInfo[car] = [];
        carsInfo[car].push(Number(mileage));
        carsInfo[car].push(Number(fuel));

    }

    while (command !== 'Stop') {
        let tokens = command.split(" : ");
        let action = tokens.shift();
        let car = tokens.shift();

        switch (action) {
            case "Drive":
                let distance = Number(tokens[0]);
                let fuel = Number(tokens[1]);
                let currentFuil = carsInfo[car][1];

                if (currentFuil < fuel) {
                    console.log("Not enough fuel to make that ride");

                } else {
                    carsInfo[car][0] = carsInfo[car][0] + distance;
                    carsInfo[car][1] = carsInfo[car][1] - fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                }
                let currentMileage = carsInfo[car][0];

                if (currentMileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete carsInfo[car];

                }
                break;
            case "Refuel":
                let refuel = Number(tokens[0]);
                let refillTank = carsInfo[car][1] + refuel;
                if (refillTank > 75) {
                    let neededL = 75 - carsInfo[car][1];
                    console.log(`${car} refueled with ${neededL} liters`);
                    carsInfo[car][1] = 75;

                } else {
                    carsInfo[car][1] = refillTank;
                    console.log(`${car} refueled with ${refuel} liters`);

                }
                break;
            case "Revert":
                let kilometers = Number(tokens[0]);
                let decreaseMeleage = carsInfo[car][0] - kilometers;

                if (decreaseMeleage < 10000) {
                    carsInfo[car][0] = 10000;
                    break;

                }
                carsInfo[car][0] = decreaseMeleage;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
                break;
        }

        index++;
        command = input[index];
    }

    for (let car of Object.keys(carsInfo)) {
        console.log(`${car} -> Mileage: ${carsInfo[car][0]} kms, Fuel in the tank: ${carsInfo[car][1]} lt.`);
    }
}

needForSpeed3(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);