let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let lowerValue = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < lowerValue) {
      lowerValue = numbers[index];      
    }
}

console.log(lowerValue);

//"lowerValue" is equivalent to "numbers"'s first element;
//The "for" command takes all the numbers within the array "numbers";
//The "if" command compares them with "lowerValue" and if the "numbers" index
//are lower than it, then it becomes this number.  