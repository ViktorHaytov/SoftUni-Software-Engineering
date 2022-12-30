function arrayModifier (input) {

    let values = input.shift().split(" ").map(Number);

    let index = 0;
    let command = input[index];

    while (command !== "end") {
        let currentCommand = command.split(" ");
        let token = currentCommand[0];
        let firstIndex = Number(currentCommand[1]);
        let secondIndex = Number(currentCommand[2]);

        switch (token) {
            case "swap":
                
                let firstElement = values[firstIndex];
                let secondElement = values[secondIndex];
                values[firstIndex] = secondElement;
                values[secondIndex] = firstElement;
                break;
            case "multiply":
                let element1 = values[firstIndex];
                let element2 = values[secondIndex];
                let sum = element1 * element2;
                values[firstIndex] = sum;
                break;
            case "decrease":
                values = values.map(x => x - 1);
                break;        

        }

        index++;
        command = input[index];

    }

    console.log(values.join(", "));

}

arrayModifier ( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);