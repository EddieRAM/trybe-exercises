/* Utilize template literals para que a chamada console.log(oddsAndEvens); 
 * retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
 * Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). 
 * Spoiler: É possível realizar uma função que ordene qualquer array de números. */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];


// Utilizando o método array.sort():

// Sem função decladara;

oddsAndEvens.sort();

console.log(oddsAndEvens); // Retorna [ 10, 13, 2, 3, 4, 7 ] , pois segue ordenação da tabela Unicode.


// Com função declarada;

// Opção 1;

function compareAB (a, b) {

if (a < b) {
  return -1;
} else if (a > b) {
  return 1;
}
return 0;
}

oddsAndEvens.sort(compareAB);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);


// Opção 2;

function compareNumbers (a, b) {
  return a - b;
}

oddsAndEvens.sort(compareNumbers);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);


// Utilizando o método .sort():

const oddsAndEvensSorted = oddsAndEvens.sort((a, b) => {
  if (a < b) {
    return -1;
  
  } else if (a > b) {
    return 1;
  }
  return 0;
})

console.log(`Os números ${oddsAndEvensSorted} se encontram ordenados de forma crescente!`);


// Utilizando o método .sort() com arrow functions:

// Opção 1;

const oddsAndEvensSorted21 = oddsAndEvens.sort((a, b) => a > b ? 1 : -1 );

console.log(`Os números ${oddsAndEvensSorted21} se encontram ordenados de forma crescente!`);


// Opção 2;

const oddsAndEvensSorted22 = oddsAndEvens.sort((a, b) => a - b );

console.log(`Os números ${oddsAndEvensSorted22} se encontram ordenados de forma crescente!`);
