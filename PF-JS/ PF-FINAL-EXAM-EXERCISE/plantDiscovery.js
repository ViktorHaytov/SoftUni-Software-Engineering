function plantDiscovery(input) {

    let plantsNumber = Number(input.shift());
    let plants = input.splice(0, plantsNumber);
    let plantsStore = {};
    let index = 0;
    let command = input[index];

    for (let info of plants) {
        let [plant, rarity] = info.split("<->");

        if (!plantsStore.hasOwnProperty(plant)) {
            plantsStore[plant] = {};
            plantsStore[plant][rarity] = [];

        } else {
            plantsStore[plant] = {};
            plantsStore[plant][rarity] = [];
        }

    }

    while (command !== "Exhibition") {
        command = command.split(": ")
        let action = command.shift();
        let [plant, raiting] = command.shift().split(" - ");

        switch (action) {
            case "Rate":
                if (plantsStore.hasOwnProperty(plant)) {
                    for (let key of Object.keys(plantsStore[plant])) {
                        plantsStore[plant][key].push(Number(raiting));

                    }

                } else {
                    console.log("error");

                }
                break;
            case "Update":
                let newRarity = Number(raiting);
                if (plantsStore.hasOwnProperty(plant)) {
                    for (let [key, value] of Object.entries(plantsStore[plant])) {
                        plantsStore[plant] = {};
                        plantsStore[plant][newRarity] = value;

                    }

                } else {
                    console.log("error");

                }
                break;
            case "Reset":
                if (plantsStore.hasOwnProperty(plant)) {
                    for (let key of Object.keys(plantsStore[plant])) {
                        plantsStore[plant][key] = [];

                    }

                } else {
                    console.log("error");

                }
                break;
        }

        index++;
        command = input[index];
    }

    console.log("Plants for the exhibition:");
    for (let [key, value] of Object.entries(plantsStore)) {
        for (let k of Object.keys(value)) {
            let sum = value[k].reduce((a, b) => a + b, 0);
            let avg = 0;
            if (value[k].length > 0) {
                avg = sum / value[k].length;
            }

            console.log(`- ${key}; Rarity: ${k}; Rating: ${avg.toFixed(2)}`);

        }

    }

}



plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);