function repaiting(input) {

    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);

    let naylonSum = (naylon + 2) * 1.50;
    let paintSum = (paint * 1.10) * 14.50;
    let thinnerSum = thinner * 5.00;

    let allSum = naylonSum + paintSum + thinnerSum + 0.40;
    let workSum = (allSum * 0.30) * workHours;
    let totalSum = allSum + workSum;

    console.log(totalSum);

}

repaiting(["10", "11", "4", "8"]);