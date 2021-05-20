let productPrice = 100;
let productTotalPrice = (productPrice/100)*20 + productPrice;
let sellPrice = 1000;
let whatProfit = sellPrice-productTotalPrice;

console.log(whatProfit);

if (productPrice<0 || sellPrice<0) {
  console.log("Error")
}
