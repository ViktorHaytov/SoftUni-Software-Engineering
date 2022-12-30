function renovation (input) {

    let index = 0;
    let wallHeight = Number(input[index]);
    index++;
    let wallWidth = Number(input[index]);
    index++;
    let percentageWithoutPaint = Number(input[index]);
    index++;
    let command = input[index];

    let allWalls = Math.ceil((wallHeight * wallWidth * 4) - (wallHeight * wallWidth * 4) * percentageWithoutPaint / 100);
    let paintLeft = 0;
    let isTired = true;


     while (command !== "Tired!") {
        let paint = Number(command);

       

        if (allWalls < paint) {
            isTired = false;
            paintLeft = Math.abs(paint - allWalls);
            console.log(`All walls are painted and you have ${paintLeft} l paint left!`);
            break;

        } else if (allWalls === paint) {
            isTired = false;
            console.log("All walls are painted! Great job, Pesho!");
            break;
        }

        allWalls -= paint;

        index++;
        command = input[index];
    }

    if (isTired) {
        console.log(`${allWalls} quadratic m left.`);
    }

}

renovation (["2",
"3",
"25",
"6",
"7",
"8"]);