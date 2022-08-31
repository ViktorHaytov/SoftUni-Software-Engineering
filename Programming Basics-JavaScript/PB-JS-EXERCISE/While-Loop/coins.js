function coins (input) {

    let change = Number(input[0]);
    let changeInCoins = Math.floor(change * 100);

    let coinsCounter = 0;


   while (changeInCoins > 0) {

    if (changeInCoins >= 200) {
        coinsCounter++;
        changeInCoins -= 200;

    } else if (changeInCoins >= 100) {
        coinsCounter++;
        changeInCoins -= 100;

    } else if (changeInCoins >= 50) {
        coinsCounter++;
        changeInCoins -= 50;

    } else if (changeInCoins >= 20) {
        coinsCounter++;
        changeInCoins -= 20;

    } else if (changeInCoins >= 10) {
        coinsCounter++;
        changeInCoins -= 10;

    } else if (changeInCoins >= 5) {
        coinsCounter++;
        changeInCoins -= 5;

    } else if (changeInCoins >= 2) {
        coinsCounter++;
        changeInCoins -= 2;

    } else if (changeInCoins >= 1) {
        coinsCounter++;
        changeInCoins -= 1;

    }
 
   }

   console.log(coinsCounter);

}

coins (["1.23"]);