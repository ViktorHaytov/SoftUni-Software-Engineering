function train (inputArr) {

    let wagons = inputArr.shift().split(" ").map(Number);
    let maxCapacity = Number(inputArr.shift());

    for (let i = 0; i < inputArr.length; i++) {
        let command = inputArr[i].split(" ");

        if (command[0] === "Add") {
            wagons.push(Number(command[1]));

        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (Number(command[0]) + wagons[j] <= maxCapacity) {
                    wagons[j] += Number(command[0]);
                    break;  
                }
            }
        }

    }

    console.log(wagons.join(" "));

}

train (['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0','30', '10', '75']);