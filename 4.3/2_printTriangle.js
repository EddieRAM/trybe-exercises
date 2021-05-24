//O código deverá imprimir um asterísco uma vez na primeira linha;
//Duas vezes na segunda, três na terceira... até a 5 linha.

let n = 5
let printTriangle = ''; 

for (let index = 0; index < n; index += 1) {
  printTriangle += '*'
  console.log(printTriangle);
}

// A array "printTriangle" vazia é criada para receber "*";
// Variável "index" recebe valor de 0 a 5;
// Loop empurra "*" na variável vazia, 1 de cada vez, até 5;
// A cada loop, "console.log", dentro do "for", imprime a array.