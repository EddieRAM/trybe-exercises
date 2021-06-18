/* Modifique a estrutura da função para que ela seja uma arrow function .
Modifique as concatenações para template literals .
Copie o código abaixo. 

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */


let ifScope2 = `Não devo ser utilizada fora do meu escopo (if)`;
const testinScope2 = (escopo2) => ( 
  escopo2 === true ? `Ótimo, fui utilizada no escopo. ${ifScope2}` : `Não devo ser utilizada fora meu escopo (else)`
);
console.log(testinScope2(true));

