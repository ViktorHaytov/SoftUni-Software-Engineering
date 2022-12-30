function shootForTheWin (input) {

    let target =input.shift().split(" ").map(Number);
    let shotCount = 0;

    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let indexShot = Number(command);

        if (indexShot < 0 || indexShot > target.length - 1) {
            index++;
            command = input[index];
            continue;

        } else {
            if (target[indexShot] !== -1) {
                shotCount++;
                let currentTarget = target[indexShot];
                target[indexShot] = -1;
                
              for (let i = 0; i < target.length; i++) {
                if (target[i] !== -1 && target[i] > currentTarget) {
                    target[i] -= currentTarget;

                } else if (target[i] !== -1 && target[i] <= currentTarget) {
                    target[i] += currentTarget;
                }
              }

            }
        }

        index++;
        command = input[index];
    }

    console.log(`Shot targets: ${shotCount} -> ${target.join(" ")}`);

}

shootForTheWin ((["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]));