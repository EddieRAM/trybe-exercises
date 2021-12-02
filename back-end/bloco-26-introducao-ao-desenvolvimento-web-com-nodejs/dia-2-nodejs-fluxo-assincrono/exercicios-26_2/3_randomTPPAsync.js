/*  3 Reescreva o código do exercício anterior para que utilize async/await .*/

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

  
  
  
  /* 
  pamParam(2, 2, randomNumber)
  .then(result => console.log(result))
  .catch(error => console.log(error)); */
  
  const asyncFunction = async () => {
  const randomNumber =  Math.floor(Math.random() * 100 + 1);
  try {
    const result = await pamParam(randomNumber, randomNumber, randomNumber);
    console.log(result);
  } catch(err) {
    console.log(err);
}
}

asyncFunction();
