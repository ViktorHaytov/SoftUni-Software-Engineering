function schoolGrades (input) {

    let result = {};

    for (let el of input) {
        let token = el.split(" ");
        let name = token.shift();
        let grades = token;

        if (!result.hasOwnProperty(name)) {
            result[name] = grades;

        } else {
            let newGrades = result[name];
            for (let g of grades) {
                newGrades.push(g);
            }
            result[name] = newGrades;       
        } 
    }

    let sortEntries = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB);
    });
    
    for (let [k, v] of sortEntries) {
        let sum = 0;

        for (let grade of v) {
            sum += Number(grade)

        }
        let avg = sum / v.length;
        
        console.log(`${k}: ${avg.toFixed(2)}`);
    }

}


schoolGrades (['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);