//O código deverá imprimir n = 5 '' de maneira decrescente e n = 5 '*' de maneira crescente

let n = 5;
let asterisks = '';
let emptySpaces = ' ';
let anotherTriangle = asterisks + emptySpaces;

for (let index = 0; index < n; index += 1) {
  emptySpaces += '*';
  console.log(emptySpaces);
}  
