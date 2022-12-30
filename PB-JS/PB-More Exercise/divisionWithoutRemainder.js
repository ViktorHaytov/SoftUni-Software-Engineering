function divisionWithoutRemainder (input) {

    let index = 0;
    let n = Number(input[index]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    for (let i = 0; i < n; i++) {
        index++;
        let numbers = Number(input[index]);

        if (numbers % 2 === 0) {
            p1++;
        } 
         if (numbers % 3 === 0) {
            p2++;
        } 
         if (numbers % 4 === 0) {
            p3++;
        }
        
    }

    console.log(`${(p1 / n * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);

}

divisionWithoutRemainder (["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"]);