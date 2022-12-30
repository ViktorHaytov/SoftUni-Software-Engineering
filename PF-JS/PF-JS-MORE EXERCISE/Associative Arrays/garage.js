function garage (input) {

    let result = new Map();

    for (let el of input) {
        let token = el.split("-");
        let garage = token.shift();
        let tokenToString = token.join();

        if (!result.has(garage)) {
            result.set(garage, new Set());
        }

        result.get(garage).add(tokenToString);
    }

    for (let [key, value] of result) {
        console.log(`Garage № ${key }`);

        for (let car of value) {
           car = car.replace(/: /g, " - ");
           console.log(`---${car}`);

        }

    }

}

garage (['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fueltype: diesel, manufacture: Fiat']);