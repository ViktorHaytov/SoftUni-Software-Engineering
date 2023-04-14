function yardGreening(input){

let metersToGreening = Number(input[0]);

let priceToGreening = metersToGreening * 7.61;
let discount = priceToGreening * 0.18;
let totalSum = priceToGreening - discount;

console.log(`The final price is: ${totalSum} lv.`);
console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);