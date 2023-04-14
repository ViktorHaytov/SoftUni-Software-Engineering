function newHouse (input) {

    let typeFlower = input[0];
    let quantityFlower = Number(input[1]);
    let budget = Number(input[2]);

    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;

    let sum = 0;

    if (typeFlower === "Roses"){
        if (quantityFlower > 80){
           
            sum = (quantityFlower * rosesPrice) * 0.90;

        }else {

            sum = quantityFlower * rosesPrice;
        }

    }else if (typeFlower === "Dahlias"){
        if (quantityFlower > 90){

            sum = (quantityFlower * dahliasPrice) * 0.85;
        }else {

            sum = quantityFlower * dahliasPrice;
        }

    }else if (typeFlower === "Tulips"){
        if (quantityFlower > 80){

            sum = (quantityFlower * tulipsPrice) * 0.85;
        }else {

            sum = quantityFlower * tulipsPrice;
        }

    }else if (typeFlower === "Narcissus"){
        if (quantityFlower < 120){

            sum = (quantityFlower * narcissusPrice) * 1.15;
        }else {

            sum = quantityFlower * narcissusPrice;
        }

    }else if (typeFlower === "Gladiolus"){
        if (quantityFlower < 80){

            sum = (quantityFlower * gladiolusPrice) * 1.20;
        }else {

            sum = quantityFlower * gladiolusPrice;
        }

    }

    if (budget >= sum){

        console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${(budget-sum).toFixed(2)} leva left.`);

    } else {

        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }


}

newHouse (["Tulips", "88", "260"]);