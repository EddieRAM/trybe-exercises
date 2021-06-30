// Faça uma lista com as suas frutas favoritas
const specialFruit = ['laranja', 'maçã', 'goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mamão', 'uva', 'banana'];

const fruitSalad = (fruit, additional) => {
  fruit = specialFruit;
  additional = additionalItens;

  return [...fruit,  ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));