function treasureHunt (input) {

    let treasure = input.shift().split("|");

    let index = 0;
    let command = input[index];
    let i;

    while (command !== "Yohoho!") {
        let tokens = command.split(" ");
        let operation = tokens.shift();

        switch (operation) {
            case "Loot":
                for (let el of tokens) {
                    if (!treasure.includes(el)) {
                        treasure.unshift(el);
                    }
                    
                }
                break;
            case "Drop":
                i = Number(tokens[0]);
                if (i < 0 || i > treasure.length) {
                    index++;
                    command = input[index];
                    continue;
                } else {
                    let element = treasure.splice(i, 1);
                    treasure.push(element[0]);
                }
                break;
            case "Steal":
                i = Number(tokens[0]);
                    let  stolenItems = treasure.splice(-i);
                    console.log(stolenItems.join(", "));
                break;      
        }

        index++;
        command = input[index];
    }

    let itemsSumOfLength = 0;

    for (let el of treasure) {
        itemsSumOfLength += el.length
    }

    let avg = itemsSumOfLength / treasure.length;

    if (treasure.length === 0) {
        console.log("Failed treasure hunt.");

    } else {
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }
    
}

treasureHunt ((["Gold|Silver|Bronze|Medallion|Cup", 
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"]));