function triplesOfLatinLetters (num) {

    let number = Number(num);

    for (let a = 0; a < number; a++) {
        let firstLetter = String.fromCharCode(97 + a);
        for (let b = 0; b < number; b++) {
            let secondLetter = String.fromCharCode(97 + b);
            for (let c = 0; c < number; c++) {
               let thirdLetter = String.fromCharCode(97 + c);

      
               console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
           }
        }

    } 

}
triplesOfLatinLetters ("3");