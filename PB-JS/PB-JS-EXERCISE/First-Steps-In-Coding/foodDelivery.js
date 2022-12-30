function foodDelivery(input) {

let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let veganMenu = Number(input[2]);

let chikenMenuPrice = chickenMenu * 10.35;
let fishMenuPrice = fishMenu * 12.40;
let veganMenuPrice = veganMenu * 8.15;

let allPrice = chikenMenuPrice + fishMenuPrice + veganMenuPrice;
let dessertPrice = allPrice * 0.20;
let totalPrice = allPrice + dessertPrice + 2.50;

console.log(totalPrice);

}

foodDelivery(["2", "4", "3"]);