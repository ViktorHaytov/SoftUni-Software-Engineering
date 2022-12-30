function movingTarget (input) {

    let target = input.shift().split(" ").map(Number)
    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let currentCommand = command.split(" ");
        let token = currentCommand[0];
        let currentIndex = Number(currentCommand[1]);
        let value = Number(currentCommand[2]);

        switch (token) {
            case "Shoot":
                if (currentIndex < 0 || currentIndex > target.length - 1) {
                    index++;
                    command = input[index];
                    continue;

                } else {
                    if (target[currentIndex] - value > 0) {
                        target[currentIndex] -= value;

                    } else {
                         target.splice(currentIndex,1);
                    }
                }
                break;
            case "Add":
                if (currentIndex < 0 || currentIndex > target.length - 1) {
                    console.log("Invalid placement!");
                    index++;
                    command = input[index];
                    continue;

                } else {
                     target.splice(currentIndex,0 ,value);
                }
                break;
            case "Strike":
                let firstIndex = currentIndex - value;
                let secondIndex = currentIndex + value;

                if (firstIndex < 0 || secondIndex > target.length - 1) {
                    console.log("Strike missed!");
                    index++;
                    command = input[index];
                    continue;

                 } else {
                    let startIndex = currentIndex - value;
                     target.splice(startIndex, value * 2 + 1);
                 }
                 break;
        }

        index++;
        command = input[index];

    }

    console.log(target.join("|"));

}

movingTarget ((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"]));