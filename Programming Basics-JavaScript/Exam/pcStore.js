function pcStore (input) {

    let cpuPriceUsd = Number(input[0]);
    let gpuPriceUsd = Number(input[1]);
    let ramPriceUsd = Number(input[2]);
    let ramNumber = Number(input[3]);
    let discount = Number(input[4]);

    let cpuPriceLv = cpuPriceUsd * 1.57;
    let gpuPriceLv = gpuPriceUsd * 1.57;
    let ramPriceLv = ramPriceUsd * 1.57;

    let ramTotalPrice = ramNumber * ramPriceLv;
    let cpuTotalPrice = cpuPriceLv - (cpuPriceLv * discount);
    let gpuTotalPrice = gpuPriceLv - (gpuPriceLv * discount);

    let totalSum = ramTotalPrice + cpuTotalPrice + gpuTotalPrice;

    console.log(`Money needed - ${totalSum.toFixed(2)} leva.`);
}

pcStore (["500",
"200",
"80",
"2",
"0.05"]);