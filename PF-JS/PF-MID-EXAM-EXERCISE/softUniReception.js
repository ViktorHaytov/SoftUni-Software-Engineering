function softUniReception (input) {

    let firstEmployee = Number(input.shift());
    let secondEmployee = Number(input.shift());
    let thirdEmployee = Number(input.shift());
    let studentsCount = Number(input.shift());

    let answersPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let timeNedded = 0;

    while (studentsCount > 0) {
        timeNedded++;
        if (timeNedded % 4 === 0) {
            continue;
        }

        studentsCount -= answersPerHour;


    }

    console.log(`Time needed: ${timeNedded}h.`);

}

softUniReception (['1','2','3','45']);