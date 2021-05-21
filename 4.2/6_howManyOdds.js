let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35];
let odds= []
let howManyOdds= 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    odds.push(numbers[index]);
    howManyOdds = odds.length;
  }   
}
if (howManyOdds == 0) {
  console.log("odd value not found");
}
else {
  console.log(howManyOdds); 
}
