function printAndSum (startNum, endNum) {

    let sum = 0;
    let printLine = "";

    for (let i = startNum; i <= endNum; i++) {
        sum += i;

        if (i === endNum) {
            printLine += `${i}`;

        } else {
            printLine += `${i} `;
        }
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum (5, 10);