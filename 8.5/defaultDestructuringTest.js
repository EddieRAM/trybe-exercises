/* Do jeito que está, quando passamos person para a função 
GetNationality o retorno é João is undefined . Ajuste a função 
GetNationality para que a chamada GetNationality(person) retorne 
João is Brazilian . */

/* Eu queria adicionar a nacionalidade de person apenas na const e não como default parameter, 
mas não consegui.
 */

const getNationality = ({ firstName = 'Peter', nationality = 'American'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const extraPerson ={}; // Como não tem nada, recebe 'Peter e 'American'

const anotherPerson = {
  firstName: 'Maria',
  lastName: 'do Bairro',
  nationality: 'Mexican',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',  
};


const { nationality = "Brazilian" } = person; // Não sei qual o motivo de não funcionar.


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person)); // João is American  --- deveria ser 'Brazilian'
console.log(getNationality(anotherPerson)); // Maria is Mexican
console.log(getNationality(extraPerson)) // Peter is American