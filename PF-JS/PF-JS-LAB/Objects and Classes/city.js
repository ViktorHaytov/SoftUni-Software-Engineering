function city (objectInput) {

    for ( let key of Object.keys(objectInput)) {
        console.log(`${key} -> ${objectInput[key]}`);
    }

}

city ({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    });