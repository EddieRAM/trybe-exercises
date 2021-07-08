/* Para fixar
Responda às perguntas a seguir, antes de nossa aula ao vivo, para ter certeza de que você entendeu os textos. 
Discuta a resposta com o restante da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a
respeito?!). Se bater alguma dúvida, volte aos textos!

O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?

R: Normalmente os códigos são executados de forma síncrona, um sendo executado após a finalização do anterior em ordem linear.
Um código assíncrono é aquele que é executado em uma área diferente da do código síncrono. Sua principal característica é
não interromper o fluxo de leituras de outros códigos enquanto é executado e poder retornar seu resultado para a área dos 
códigos síncronos quando finalizado. É uma solução encontrada pelos desenvolvedores para evitar o chamado "callback hell", ou 
seja, uma callback dentro de outra callback sucessivas vezes. 


Quando você tem que enfileirar várias callbacks , que problema surge?

R: O chamado "callback hell" é um problema ocasionado pelo acúmulo de callbacks, umas dentro da outras repetidas vezes. 
É considerado um problema principalmente pelo fato de deixar o código grande, tornar difícil sua leitura e lenta sua execução.


Por que as Promises são uma forma de se resolver esse problema?

R: As promises são objetos especiais do Javascript executadas de modo assíncrono e que contém propriedades que lidam com os seus
resultados em casos de sucesso (Fullfilled) ou fracasso (Rejected) e ainda, quando a execução ainda não foi concluída, está 
pendente (Pending). Isso possibilita sua função interna .then() ser replicada em forma de pilha evitando a necessidade de se 
criar callback functions para execuções de funções replicadas várias vezes para diferentes parâmetros.  


Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona? 
Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para 
dar retorno, pode estar fora do ar etc.

R: Assíncrona.


Dada a resposta anterior, o que é fetch e para que ele serve? 

R: O fetch é uma propriedade da Promise que recebe uma url como parâmetro e sua principal função é lidar com a comunicação com a API.
Por meio dele é que é possível ler e tratar os dados recebidos e mandados para o front-end.

*/

