/* 5 Agora temos um problema: peso não é um número inteiro! Isso quer dizer que
 precisamos mudar um pouco a forma como solicitamos o input desse dado.
O pacote readline-sync possui uma função específica para tratar esses casos.

Consulte a documentação do pacote e encontre o método adequado para realizar input 
de floats.

Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .*/

const readline = require('readline-sync');

function calculateIMC () {
  const weight = readline.questionFloat('What is your weight in kg?'); 
  const height = readline.questionInt('What is your height in cm?');
  
  const IMC = (weight / Math.pow(height / 100, 2)).toFixed(2);
    
  console.log(`Your IMC is ${IMC}`);
}

calculateIMC();