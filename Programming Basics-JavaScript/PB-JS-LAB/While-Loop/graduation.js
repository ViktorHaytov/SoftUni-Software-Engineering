function graduation (input) {

   let index = 0;
   let name = input[index];
   index++;

   let badGrades = 0;
   let allGrades = 0;
   let isExcluded = false;
   
   let i = 1;
   while (i <= 12) {
    let grade = Number(input[index]);
    index++;

    if (grade < 4.00) {
        badGrades++;

        if (badGrades > 1) {
            isExcluded = true;
            console.log(`${name} has been excluded at ${i} grade`);
            break;
        }

        continue;
    }

    allGrades += grade;
    i++;

   }

 

   if (!isExcluded) {
    let averageGrade = allGrades / 12;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);

   }


}

graduation (["Gosho","5","5.5","6","5.43","5.5","6","5.55","5","6","6","5.43","5"]);