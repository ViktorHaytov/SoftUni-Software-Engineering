function cinema (input) {

    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let command = input[index];

    let incomeSum = 0;
    let isFull = false;

    while (command !== "Movie time!") {
        let peopelNum = Number(command);
        let currentSum = peopelNum * 5;
        
        if (capacity < peopelNum) {
            isFull = true;
            console.log("The cinema is full.");
            console.log(`Cinema income - ${incomeSum} lv.`);
            break;
        }

        if (peopelNum % 3 === 0) {
            currentSum -= 5;
            incomeSum += currentSum;
        } else {
            incomeSum += currentSum;
        }

        capacity -= peopelNum;
        
        index++;
        command = input[index];
    }

    if (!isFull) {
        console.log(`There are ${capacity} seats left in the cinema.`);
        console.log(`Cinema income - ${incomeSum} lv.`);
    }
 
}

cinema (["50",
"15",
"10",
"10",
"15",
"5"]);