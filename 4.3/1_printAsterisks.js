// Criar uma sequência de n '*', sendo n = 5;
// Imprimir a array tantas vezes quanto o número de '*', ou seja, de n = 5.

let n = 5
let asterisks = '';

for (let index = 0; index < n; index += 1) {
  asterisks += '*';
}
for (let index = 0; index < n; index += 1) {
  console.log(asterisks);
}

//Declara variável n =5;
//Declara variável de tipo string vazia;
//Coloca n '*' na string;
//Imprime n vezes a string.