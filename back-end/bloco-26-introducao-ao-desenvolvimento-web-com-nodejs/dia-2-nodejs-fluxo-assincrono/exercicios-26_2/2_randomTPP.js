/*  2 Escreva um código para consumir a função construída no exercício anterior.
Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. 
Para gerar um número aleatório, utilize o seguinte trecho de código: 

Math.floor(Math.random() * 100 + 1).

Chame a função do exercício anterior, passando os três números aleatórios 
como parâmetros.

Utilize then e catch para manipular a Promise retornada pela função:

Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.

Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.*/

function pamParam(num1, num2, num3) {
  return new Promise((resolve,reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
    
    reject('Informe apenas números');

    const result = (num1 + num2) * num3;

    if (result < 50) {
      return reject(`Valor muito baixo`);
    }

    resolve(result);

  });
}

/* pamParam(2,2,'30')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error)); */

  const random =  Math.floor(Math.random() * 100 + 1);


function callPamParam () {
  const random = Array.from({ length: 3 }).map(getRandomNumber);    
}

pamParam(random, random, random)
.then(result => console.log(result))
.catch(error => console.log(error));
