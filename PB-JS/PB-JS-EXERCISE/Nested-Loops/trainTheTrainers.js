function trainTheTrainers (input) {

    let numberJudges = Number(input[0]);
    let index = 1;
    let command = input[index];

    let allPresentationsSum = 0;
    let counter = 0;

    while (command !== "Finish") {
        
        let currentPresName = command;
        let currenPresGrade = 0;
        

        for (let i = 0; i < numberJudges; i++) {
            index++;
            let grade = Number(input[index]);

            counter++;
            currenPresGrade += grade;
            allPresentationsSum += grade;
        }

        let avgGrade = currenPresGrade / numberJudges;
        console.log(`${currentPresName} - ${avgGrade.toFixed(2)}.`);

        index++;
        command = input[index];
    }

    let avgAllPresentation = allPresentationsSum / counter;
    console.log(`Student's final assessment is ${avgAllPresentation.toFixed(2)}.`);
}

trainTheTrainers (["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);