function uniquePinCodes (input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let n3 = Number(input[2]);

    for (let a = 2; a < n1; a++) {
        for (let b = 2; b < n2; b++) {
            for (let c = 2; c < n3; c++) {

               if (a % 2 == 0 && n2 % b !== 0  && c % 2 === 0) {
                   console.log(`${a}${b}${c} `);
               }

            }
        }

    }
}

uniquePinCodes (["3",
"5",
"5"]);