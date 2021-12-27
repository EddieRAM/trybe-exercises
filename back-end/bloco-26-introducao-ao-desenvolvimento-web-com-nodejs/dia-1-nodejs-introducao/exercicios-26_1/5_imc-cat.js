/* 3 Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela,
imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:

Considere a seguinte tabela para classificar a situação do IMC:


| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  |*/

const readline = require('readline-sync');

function calculateCatIMC () {
  const weight = readline.questionFloat('What is your weight in kg?');
  const height = readline.question('What is your height in cm?');

  const IMC = ( weight / Math.pow(height / 100, 2) ).toFixed(2);

  console.log(`Your IMC is ${IMC}`);

  if (IMC < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (IMC >= 18.5 && IMC < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (IMC >= 25 && IMC < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (IMC >= 30 && IMC < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (IMC >= 35 && IMC < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}


calculateCatIMC();

module.exports = {
  calculateCatIMC
}