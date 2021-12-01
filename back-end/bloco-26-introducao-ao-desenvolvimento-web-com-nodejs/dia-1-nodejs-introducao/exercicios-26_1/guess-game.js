/* 7 Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o
 número aleatório gerado.

O script deve ser executado através do comando npm run sorteio .

Utilize o readline-sync para realizar input de dados.

Armazene o script em sorteio.js.


O número gerado deve ser um inteiro entre 0 e 10.

Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".

Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era
 [número sorteado]".

 Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo
  do script.*/

const readline = require('readline-sync');

function createGuessGame () {

  const userNumber = readline.questionInt('Insert any number between 0 and 10');

  const gameResult = (Math.random(0, 1).toFixed(1)) * 10;

  if (userNumber === gameResult) {
    console.log(`And the result is... ${gameResult}. Congratulations, you guessed the number!`);    
    return;
  }

  if (userNumber !== gameResult) {
    console.log(`And the result is... ${gameResult}. You didn't guess the number`);
    console.log('Wanna try again?'); 
    return;   
  }

  const yesOrNo = readline.question('y/n');
  
  if (yesOrNo !== 'y') return console.log('Thank you for playing!');    
  

  createGuessGame();
}
createGuessGame();