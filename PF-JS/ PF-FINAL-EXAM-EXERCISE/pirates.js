function pirates(input) {

    let citiesInfo = {};
    let indexOfSail = input.indexOf("Sail")
    let cities = input.splice(0, indexOfSail + 1);

    for (let info of cities) {
        if (info === "Sail") {
            break;
        }
        let [citie, population, gold] = info.split("||");

        if (!citiesInfo.hasOwnProperty(citie)) {
            citiesInfo[citie] = [];
            citiesInfo[citie].push(Number(population));
            citiesInfo[citie].push(Number(gold));

        } else {
            citiesInfo[citie][0] += Number(population);
            citiesInfo[citie][1] += Number(gold);

        }

    }

    for (let command of input) {
        if (command === "End") {
            break;
        }
        let tokens = command.split("=>");
        let action = tokens.shift();
        let town = tokens.shift();

        switch (action) {
            case "Plunder":
                let people = Number(tokens[0]);
                let gold = Number(tokens[1]);
                citiesInfo[town][0] -= people;
                citiesInfo[town][1] -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (citiesInfo[town][0] <= 0 || citiesInfo[town][1] <= 0) {
                    delete citiesInfo[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
            case "Prosper":
                let prosperGold = Number(tokens[0]);
                if (prosperGold <= 0) {
                    console.log("Gold added cannot be a negative number!");
                    continue;
                }
                citiesInfo[town][1] += prosperGold;
                console.log(`${prosperGold} gold added to the city treasury. ${town} now has ${citiesInfo[town][1]} gold.`);
                break;
        }

    }

    let isAmpty = Object.entries(citiesInfo).length;

    if (isAmpty === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");

    } else {
        console.log(`Ahoy, Captain! There are ${isAmpty} wealthy settlements to go to:`);
        for (let [key, value] of Object.entries(citiesInfo)) {
            console.log(`${key} -> Population: ${value[0]} citizens, Gold: ${value[1]} kg`);

        }

    }

}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);