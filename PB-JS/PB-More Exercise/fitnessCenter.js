function fitnessCenter (input) {

    let index = 0;
    let peopelNum = Number(input[index]);

    let workOutCount = 0;
    let buyCount = 0;

    let backCount = 0;
    let chestCount = 0;
    let legsCount = 0;
    let absCount = 0;
    let proteinShakeCount = 0;
    let proteinBarCount = 0;

    for (let i = 0; i < peopelNum; i++) {
        index++;
        let command = input[index];

        if (command === "Back") {
            backCount++;
            workOutCount++;

        } else if (command === "Chest") {
            chestCount++;
            workOutCount++;

        } else if (command === "Legs") {
            legsCount++;
            workOutCount++;

        } else if (command === "Abs") {
            absCount++;
            workOutCount++;

        } else if (command === "Protein shake") {
            proteinShakeCount++;
            buyCount++;

        } else if (command === "Protein bar") {
            proteinBarCount++;
            buyCount++;

        }  
    }

    console.log(`${backCount} - back`);
    console.log(`${chestCount} - chest`);
    console.log(`${legsCount} - legs`);
    console.log(`${absCount} - abs`);
    console.log(`${proteinShakeCount} - protein shake`);
    console.log(`${proteinBarCount} - protein bar`);
    console.log(`${(workOutCount / peopelNum * 100).toFixed(2)}% - work out`);
    console.log(`${(buyCount / peopelNum * 100).toFixed(2)}% - protein`);
}

fitnessCenter (["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"]);