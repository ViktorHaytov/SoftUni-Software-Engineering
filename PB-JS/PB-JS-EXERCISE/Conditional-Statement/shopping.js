function shopping (input) {

let budget = Number(input[0]);
let gpu = Number(input[1]);
let cpu = Number(input[2]);
let ram = Number(input[3]);

let gpuSum = gpu * 250;
let cpuPrice = gpuSum * 0.35;
let ramPrice = gpuSum * 0.10;

let cpuSum = cpuPrice * cpu;
let ramSum = ramPrice * ram;

let totalSum = gpuSum + cpuSum + ramSum;

if (gpu > cpu) {
    totalSum = totalSum * 0.85;
}

if (totalSum <= budget) {
    console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
}else {
    console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
}


}

shopping (["900", "2", "1", "3"]);