function numbersDivisibleBy9 (input) {

    let startNumber = Number(input[0]);
    let andNumber = Number(input[1]);

    let sum = 0;
    let printNumber = "";

    for (let i = startNumber; i <= andNumber; i++) {

        if (i % 9 === 0) {
            sum += i;
            printNumber += `${i}\n`;


        }


    }

    console.log(`The sum: ${sum}`);
    console.log(printNumber);
}

numbersDivisibleBy9 (["100", "200"]);