// 3 Substitua os valores fixos de peso e altura por dados informados pela pessoa
//  ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

const readline = require('readline-sync');

function calculateInputIMC () {

  // Instead of getting the parameters from the function  
  const weight = readline.questionInt('What is your weight in kg?'); 
  const height = readline.questionInt('What is your height in cm?');
  
  const IMC = (weight / Math.pow(height / 100, 2)).toFixed(2);
    
  console.log(`Your IMC is ${IMC}`);
}

calculateInputIMC();

module.exports = {
  calculateInputIMC
}