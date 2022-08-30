function examPreparation (input) {

    let badGrades = Number(input[0]);

    let index = 1;
    let problem = input[index];
    index++;
    let grade = Number(input[index]);

    let isFailed = false;
    let badGradesNumber = 0;
    let totalProblems = 0;
    let totalScores = 0;
    let lastProblem = "";

    while (problem !== "Enough") {
        totalProblems++;

        if (grade <= 4) {
            badGradesNumber++;

            if (badGradesNumber === badGrades) {
                isFailed = true;
                break;
            }

        }

        totalScores += grade;
        lastProblem = problem;


        index++;
        problem =input[index];
        index++;
        grade = Number(input[index]);

    }

    let averageScore = totalScores / totalProblems;

    if (isFailed === true) {
        console.log(`You need a break, ${badGrades} poor grades.`);

    }else {
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${totalProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }

    
}

examPreparation (["2","Income","3","Game Info","6","Best Player","4"]);