function petShop(input){

    let packageDogsFood = Number(input[0]);
    let packageCatsFood = Number(input[1]);

    let dogsPackPrice = 2.50;
    let catsPackPrice = 4;

    let totalSum = (packageDogsFood * dogsPackPrice) + (packageCatsFood * catsPackPrice);

    console.log(`${totalSum} lv.`);
}

petShop(["5", "4"]);