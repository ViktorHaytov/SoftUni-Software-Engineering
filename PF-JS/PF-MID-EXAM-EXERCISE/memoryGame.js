function memoryGame (input) {

    let board = input.shift().split(" ");
    let movesCount = 0;

    let index = 0;
    let command = input[index];

    while (command !== "end") {
        movesCount++;
        let indexElements = command.split(" ").map(Number)
        let startIndex = indexElements[0];
        let endIndex = indexElements[1];

        if ((startIndex < 0 || startIndex >= board.length) ||
            (endIndex < 0 || endIndex >= board.length) || (startIndex === endIndex)) {
                let elementToAdd = `-${movesCount}a`;
                
                    board.splice(board.length / 2, 0,elementToAdd,elementToAdd);
                    console.log("Invalid input! Adding additional elements to the board");
                
            } else {
                if (board[startIndex] === board[endIndex]) {
                    console.log(`Congrats! You have found matching elements - ${board[startIndex]}!`);
                    board = board.filter(e => e !== board[startIndex]);

                } else {
                    console.log("Try again!");
                }
            }
            if (board.length === 0) {
                console.log(`You have won in ${movesCount} turns!`);
                break;
            }

        index++;
        command = input[index];
    }

    if (command === "end") {
        console.log(`Sorry you lose :(\n${board.join(" ")}`);
    }

}

memoryGame ([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);