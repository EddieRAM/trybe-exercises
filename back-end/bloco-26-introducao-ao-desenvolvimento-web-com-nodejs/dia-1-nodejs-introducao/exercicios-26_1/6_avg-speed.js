/* 6 Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida.

A fórmula para calcular velocidade média é distância / tempo.

Agora, permita que o script seja executado através do comando npm run velocidade . Para isso, crie a
 chave velocidade dentro do objeto scripts no package.json.

Utilize o readline-sync para solicitar os dados à pessoa.

Considere a distância em metros e o tempo em segundos. Repare que, agora, estamos trabalhando com
 números inteiros. */

const readline = require('readline-sync');

function calculateAvgSpeed () {

  const space = readline.questionInt('What is the space in meters?'); //m
  const time = readline.questionInt('What is the time in seconds?'); //s 

  const avgSpeed = space / time;

  const avgSpeedKmPH = avgSpeed * (36 / 10);

  console.log( `The average speed is ${avgSpeed}m/s or ${avgSpeedKmPH}km/h`);
}

calculateAvgSpeed();

module.exports = {
  calculateAvgSpeed
}