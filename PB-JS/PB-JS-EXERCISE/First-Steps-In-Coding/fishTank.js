function fishTank (input) {

    let length = Number(input[0]);
    let width =Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = length * width * height;
    let volumeLit = volume / 1000;
    let neededWater = volumeLit * (1 - (percentage / 100));

    console.log(neededWater)

}

fishTank (["85", "75", "47", "17"]);