/* 1 Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.

A fórmula para calcular o IMC é peso / altura ^ 2.

Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a 
 conversão para metros será necessária.

Comece criando um novo pacote node com npm init e respondendo às perguntas do npm.

Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores 
 fixos para peso e altura. */

function calculateIMC (weight, height) {
  
  
  console.log(`Your weight is ${weight} and your height is ${height}`)

  // IMC calculation is weight (kg) / height² (m)
  
  const IMC = (weight / Math.pow(height / 100, 2)).toFixed(2);// Math.pow(número, expoente).

  // IMC height input is in m, so we divide height by 100 to convert cm to m.
  
  console.log(`Your IMC is ${IMC}`);
}

calculateIMC(78, 178);


// 2 Agora, permita que o script seja executado através do comando npm run imc.

// added "imc": "node imc.js" inside "scripts" on package.json.

module.exports = {
  calculateIMC
}
