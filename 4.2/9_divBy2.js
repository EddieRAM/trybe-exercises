let arr1To25 = []
let divBy2 = []

for (let index = 1; index <= 25; index +=1) {
  arr1To25.push(index);
}
for (index2 = 0; index2 < arr1To25.length+1; index2 +=1) {
  divBy2.push(index2/2);
} 

console.log(divBy2);

//The first for pushes 1 to 25 into the array "arr1To25";
//The second for takes all the numbers within "arr1To25", 
//divides them by 2 and pushes them to "divBy2". 
