const returnString = () => {
  const text = 'Acordando!!'
  return text;
}



const returnOtherString = () => {
  const otherText = 'Bora tomar café!!'
  return otherText;
}



const returnAnotherString = () => {
  const anotherText = 'Partiu dormir!!'
  return anotherText;
}



const doingThings = {
  wakeUp: returnString(),
  getCoffee: returnOtherString(),
  gNight: returnAnotherString(),
}

console.log(doingThings.wakeUp);
console.log(doingThings.getCoffee);
console.log(doingThings.gNight);

doingThings(wakeUp);
/* 
const doingThings = (selectFunction) => {
 i wakeUp = returnString;
  coffee = returnOtherString;
  gNight = returnAnotherString;  
}

console.log(doingThings(wakeUp)) */