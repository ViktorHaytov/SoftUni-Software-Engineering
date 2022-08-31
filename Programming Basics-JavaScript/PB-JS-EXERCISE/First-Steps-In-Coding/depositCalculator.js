function depositCalculator(input) {

let depositSum = Number(input[0]);
let depositTime = Number(input[1]);
let annualInterest = Number(input[2]);

let interestSum = depositSum * (annualInterest / 100);
let interestPerMonth = interestSum / 12;
let totalSum = depositSum + depositTime * interestPerMonth;

console.log(totalSum);

}

depositCalculator(["200", "3", "5.7"]);