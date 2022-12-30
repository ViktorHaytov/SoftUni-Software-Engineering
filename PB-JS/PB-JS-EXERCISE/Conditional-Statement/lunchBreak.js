function lunchBreak (input) {

let movieName = input[0];
let movieDuration = Number(input[1]);
let breakDuration = Number(input[2]);

let lunchTime = breakDuration / 8;
let restTime = breakDuration / 4;

let leftTime = breakDuration - lunchTime - restTime;

if (leftTime >= movieDuration) {
    console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(leftTime - movieDuration)} minutes free time.`);
}else {
    console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(movieDuration - leftTime)} more minutes.`);
}

}

lunchBreak (["Game of Thrones", "60", "96"]);