function heroesOfCodeAndLogicVII (input) {

    let n = Number(input.shift());
    let heroes = input.splice(0, n);
    let result = {};
    let index = 0;
    let command = input[index];

    for (let info of heroes) {
        let [name, hp, mp] = info.split(" ");

        result[name] = [];
        result[name].push(Number(hp));
        result[name].push(Number(mp));

    }

    while (command !== "End") {
        let tokens = command.split(" - ");
        let action = tokens.shift();
        let heroeName = tokens.shift();

        switch (action) {
            case "CastSpell":
                let mpNeeded = Number(tokens[0]);
                let spellName = tokens[1];
                let currentMp = result[heroeName][1];

                if (currentMp < mpNeeded) {
                    console.log(`${heroeName} does not have enough MP to cast ${spellName}!`);
                    break;
                }

               result[heroeName][1] = result[heroeName][1] - mpNeeded;
               console.log(`${heroeName} has successfully cast ${spellName} and now has ${result[heroeName][1]} MP!`); 
                break;
            case "TakeDamage":
                let damage = Number(tokens[0]);
                let attacker = tokens[1];
                result[heroeName][0] = result[heroeName][0] - damage;
                let currentHp = result[heroeName][0];

                if (currentHp <= 0) {
                    console.log(`${heroeName} has been killed by ${attacker}!`);
                    delete result[heroeName];
                    break;
                }

                console.log(`${heroeName} was hit for ${damage} HP by ${attacker} and now has ${currentHp} HP left!`);
                break;
            case "Recharge":
                let amountMp = Number(tokens[0]);
                let neededRegarge = amountMp + result[heroeName][1];

                if (neededRegarge >= 200) {
                    let usedAmountMp = 200 - result[heroeName][1];
                    result[heroeName][1] = 200;
                    console.log(`${heroeName} recharged for ${usedAmountMp} MP!`);

                } else {
                    result[heroeName][1] = result[heroeName][1] + amountMp;
                    console.log(`${heroeName} recharged for ${amountMp} MP!`);

                }
                break;
            case "Heal":
                let amountHp = Number(tokens[0]);
                let neededHp = amountHp + result[heroeName][0];

                if (neededHp >= 100) {
                    let usedAmountHp = 100 - result[heroeName][0];
                    result[heroeName][0] = 100;
                    console.log(`${heroeName} healed for ${usedAmountHp} HP!`);

                } else {
                    result[heroeName][0] = result[heroeName][0] + amountHp;
                    console.log(`${heroeName} healed for ${amountHp} HP!`);
                }
                break;          

        }

        index++;
        command = input[index];
    }

    for (let [key, value] of Object.entries(result)) {
        console.log(key);
        console.log(` HP: ${value[0]}\n MP: ${value[1]}`);
    }

}

heroesOfCodeAndLogicVII (["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]);