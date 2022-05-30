function cake (input) {

    let widthCake = Number(input[0]);
    let lengthCake = Number(input[1]);
    let sizeCake = widthCake * lengthCake;

    let index = 2;
    let command = input[index];

    let piecesCount = 0;

    while (command !== "STOP") {
        let pieces = Number(command);

         piecesCount += pieces;

         if (piecesCount > sizeCake) {
            console.log(`No more cake left! You need ${piecesCount - sizeCake} pieces more.`);
            break;
        }



        index++;
        command = input[index];

    }

    if (command === "STOP") {
        if (sizeCake >= piecesCount) {
            console.log(`${sizeCake - piecesCount} pieces are left.`);
        }
    }

}

cake (["10","10","20","20","20","20","21"]);