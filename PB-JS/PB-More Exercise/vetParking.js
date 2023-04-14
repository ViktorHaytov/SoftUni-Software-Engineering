function vetParking (input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let totalSum = 0;

    for(let a = 1; a <= days; a++) {
        let totalDaySum = 0;
        for (let b = 1; b <= hours; b++) {
            
            let currentDaySum = 0;
           
            if (a % 2 === 0) {
                if (b % 2 !== 0) {
                    currentDaySum += 2.50;
                } else {
                    currentDaySum += 1.00;
                }

            } else if (a % 2 !== 0) {
                if (b % 2 === 0) {
                    currentDaySum += 1.25;
                } else {
                    currentDaySum += 1.00;
                }
            }
            totalSum += currentDaySum;
            totalDaySum += currentDaySum;
        }
     console.log(`Day: ${a} - ${totalDaySum.toFixed(2)} leva`);

    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
    
}

vetParking (["5",
"2"]);