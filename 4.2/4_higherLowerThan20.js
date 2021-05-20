let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumAll = 0;
let arithmeticAverage = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumAll += numbers[index];
  arithmeticAverage = sumAll / 2;
  console.log(arithmeticAverage)
}
if (arithmeticAverage > 20) {
  console.log("valor maior que 20")
}
else {
  console.log("valor menor ou igual a 20")
}