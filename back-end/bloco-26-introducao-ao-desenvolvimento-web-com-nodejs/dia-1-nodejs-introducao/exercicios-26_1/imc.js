// 1 Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

/* function calculateIMC () {
  const weight = 78; // in kg
  const height = 178; // in cm
  
  console.log(`Your weight is ${weight} and your height is ${height}`)

  // IMC calculation is weight (kg) / height² (m)
  
  const IMC = (weight / Math.pow(height / 100, 2)).toFixed(2);

  // IMC height input is in m, so we divide height by 100 to convert cm to m.
  
  console.log(`Your IMC is ${IMC}`);
}

calculateIMC(); */


// 2 Agora, permita que o script seja executado através do comando npm run imc.

// added "imc": "node imc.js" inside "scripts" on package.json.



// 3 Substitua os valores fixos de peso e altura por dados informados pela pessoa
//  ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.

const readline = require('readline-sync');

function calculateIMC () {
  const weight = readline.questionInt('What is your weight in kg?'); 
  const height = readline.questionInt('What is your height in cm?');
  
  const IMC = (weight / Math.pow(height / 100, 2)).toFixed(2);
    
  console.log(`Your IMC is ${IMC}`);
}

calculateIMC();
