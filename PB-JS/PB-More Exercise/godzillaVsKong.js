function godzillaVsKong (input) {

    let budget = Number(input[0]);
    let actors = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let decorPrice = budget * 0.10;
    let outfitSum = actors * outfitPrice;

    if (actors > 150) {

        outfitSum = outfitSum * 0.90;
    }

    let totalSum =  outfitSum + decorPrice;

    if (totalSum <= budget) {

        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);

    } else {

        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);

    }


}

godzillaVsKong (["20000","120","55.5"]);