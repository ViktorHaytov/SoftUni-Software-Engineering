function theAngryCat (array, point, command) {

    let items = array;
    let startPoint = point;
    let currentCommand = command;

    let leftSum = 0;
    let rightSum = 0;

    switch (currentCommand) {
        case "cheap":
            for (let i = 0; i < startPoint; i++) {
                if (items[i] < items[startPoint]) {
                    leftSum += items[i];
                }
            }
            for (let j = startPoint + 1; j < items.length; j++) {
                if (items[j] < items[startPoint]) {
                    rightSum += items[j];
                }
            }
            break;
        case "expensive":
            for (let l = 0; l < startPoint; l++) {
                if (items[l] >= items[startPoint]) {
                    leftSum += items[l];

                }
            }
            for (let r = startPoint + 1; r < items.length; r++) {
                if (items[r] >= items[startPoint]) {
                    rightSum += items[r];

                }

            }
            break;
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);

    } else {
        console.log(`Right - ${rightSum}`);
    }
    
}

theAngryCat ([1, 5, 1],
    1,
    "cheap");