function toyShop (input) {

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let tedysCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);
    
    let puzzlePrice = puzzleCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let tedysPrice = tedysCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let allsum = puzzlePrice + dollsPrice + tedysPrice + minionsPrice + trucksPrice;

    let toysCount = puzzleCount + dollsCount + tedysCount + minionsCount + trucksCount;

    if (toysCount >= 50) {
        allsum = allsum * 0.75;
    }

    let totalSum = allsum * 0.90;

    if (totalSum >= tripPrice) {
        console.log(`Yes! ${(totalSum - tripPrice).toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${(tripPrice - totalSum).toFixed(2)} lv needed.`);
    }

}

toyShop (["40.8", "20", "25", "30", "50", "10"]);