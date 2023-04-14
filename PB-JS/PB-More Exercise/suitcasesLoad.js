function suitcasesLoad (input) {

    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let command = input[index];

    let suitcasesCount = 0;
    let isloaded = true;

    while (command !== "End") {
        let suitcase = Number(command);
        suitcasesCount++;
        
        if (suitcasesCount % 3 === 0) {
            suitcase *= 1.10;
        }

        

        if (capacity < suitcase) {
            suitcasesCount--;
            isloaded = false;

            break;
        }

        capacity -= suitcase;

        
        index++;
        command = input[index];
    }

    if (isloaded) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);

    } else {
        console.log(`No more space!`);
        console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);
    }
}

suitcasesLoad (["550",
"100",
"252",
"72",
"End"]);