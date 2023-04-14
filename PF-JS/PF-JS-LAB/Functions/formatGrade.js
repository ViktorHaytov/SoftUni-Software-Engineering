function formatGrade (grade) {

    let descr;
    let formatedGrade = grade.toFixed(2);

    if (grade < 3) {
        descr = "Fail";
        formatedGrade = 2;
        
    } else if (grade < 3.50) {
        descr = "Poor";

    } else if (grade < 4.50) {
        descr = "Good";

    } else if (grade < 5.50) {
        descr = "Very good"

    } else {
        descr = "Excellent";
    }

    console.log(`${descr} (${formatedGrade})`);

}

formatGrade (5.65);