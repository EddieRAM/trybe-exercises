/* Crie um arquivo index.js que pergunta qual script deve ser executado

O script deve ser acionado através do comando npm start .

Utilize o readline-sync para realizar o input de dados

Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis.
Ao digitar o número de um script e pressionar enter, o script deve ser executado.

Você pode utilizar o require para executar o script em questão. */

const readline = require('readline-sync');

function chooseScript() {
  const whichScript = readline.question('Which script should I run? (imc/imc-question/imc-float/imc-cat/velocidade/sorteio)');
  
  if (whichScript === 'imc') {
    const { calculateIMC } = require('./1_imc');
    calculateIMC;
  }
  if (whichScript === 'imc-question') {
    const { calculateInputIMC } = require('./3_imc-question');
    calculateInputIMC;
  }
  if (whichScript === 'imc-float') {
    const { calculateInputIMCFloat } = require('./4_imc-float');
    calculateInputIMCFloat;
  }
  if (whichScript === 'imc-cat') {
    const { calculateCatIMC } = require('./5_imc-cat');
    calculateCatIMC;
  }
  if (whichScript === 'velocidade') {
    const { calculateAvgSpeed } = require('./6_avg-speed');
    calculateAvgSpeed;
  }
  if (whichScript === 'sorteio') {
    const { guessingGame } = require('./7_guess-game');
    guessingGame
  }

}

chooseScript();
