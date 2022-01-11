/*  3 Reescreva o código do exercício anterior para que utilize async/await . */

const pamParam = require('./1_threeParamProm');

const asyncFunction = async () => {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  try {
    const result = await pamParam(randomNumber, randomNumber, randomNumber);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

asyncFunction();
