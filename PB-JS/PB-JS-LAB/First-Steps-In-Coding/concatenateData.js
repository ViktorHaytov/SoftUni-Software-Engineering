function concatenateData(input) {

let firstname = input[0];
let lastName = input[1];
let age = Number(input[2]);
let town = input[3];

console.log(`You are ${firstname} ${lastName}, a ${age}-years old person from ${town}.`);

}

concatenateData(["Viktor", "Haytov", "31", "Devin"]);