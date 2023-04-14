function bonusScoringSystem (input) {

    let students = Number(input.shift());
    let lectures = Number(input.shift());
    let bonus =  Number(input.shift());
    let points = [];

    for (let i = 0; i < students; i++) {
        let sumPoints = Number(input[i]) / lectures * (5 + bonus);
        points.push(sumPoints);

    }

    input.map(Number)
    let maxPoints = Math.max(...points);
    let attendance = Math.max(...input);

    console.log(`Max Bonus: ${Math.ceil(maxPoints)}.`);
    console.log(`The student has attended ${attendance} lectures.`);

}

bonusScoringSystem (['5',  '25', '30','12', '19', '24','16', '20']);