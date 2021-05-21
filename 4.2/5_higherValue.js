let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higherValue) {
      higherValue = numbers[index];
    }
}

console.log(higherValue);

//The for command takes all the numbers from the array one by one and "if" compares them with
//higherValue. When it finds a number which is higher than higherValue
//higherValue becomes this number.

