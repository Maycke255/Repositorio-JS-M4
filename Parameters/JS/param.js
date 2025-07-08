/* Uma rest param e nada mais nada menos que o resto dos porametros de uma função, ela possibilita declararmos quantos parametros/argumentos quisermos,
por exemplo, declaramos um unico parametro para a função, em seguida podemos passar quantos valores quisermos nesse oarametro, ela e como se fosse uma
array, podemos ate ultilizar metodos de array nesse metodo, mas caso quisermos declarar um argumento a mais na função que vamos usar de maneira especifica
na função, devemos passar antes do rest param.
Isso e util em situações como:
Manipulação de arrays sem mutar os originais.
Aceitar inputs dinâmicos em funções utilitárias.
passar arrays como argumentos de uma função, afinal os parametros são ilimitados. */
const integers = [3, 7, 13, 5]

const games = ['Super Mario Bross', 'MK11', 'Call of Duty Black Ops 3', 'Pokemon Legends Arceus']

console.log(...games)
console.log(...games[0])

const number = [...integers]
number.pop()
const reduceNumbers = number.reduce((integer, num) => integer + num, 0)

console.log(integers)
console.log(reduceNumbers)

function numbers (...element) {
    console.log(element)

    return element.reduce((integer, num) =>  integer + num , 0)
}

console.log(numbers(3, 3))

//=========================================================
// OPERADOR DE ENCADEAMENTO OPCIONAL
//=========================================================

/* Geralmente quando tentamos exibir ou acessar uma propriedade que não existe, ela da um erro no console (TypeError: Cannot read properties of undefined
(reading 'ddd')), ou seja, o erro diz que ele tentou acessar uma propriedade indefinida (inexistente), mas para não dar nenhum erro e não parar o codigo
usamos o operador de encadeamento opcional "?." e seguido de uma interrogação e o ponto "." que usamos normalmente para encadear alguma coisa a outra, 
ele faz um tipo de questionamento antes de prosseguir para a proxima ação, assim podemos impedir erros e melhor fluidez no codigo. */
const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}

// A propriedade phone e ddd não existe, então retorna apenas undefined e não da erro
const acess = user?.friends[0]?.phone?.ddd

// Uma boa coisa e verificar se a opção não existe e exibir um alerta para o usuario
if (acess === undefined) {
    console.log('O conteudo não existe.')
}
// ERRO PADRÃO DE ENCADEAMENTO
// console.log(user?.friends[0].phone.ddd)

//=========================================================
// OPERADOR DE COALESCÊNCIA NULA (??)
//=========================================================

/* Esse e um operador meio esquisito, e usado como operador lógico, assim como o && e || para fazer verificações, mas no caso dele O operador ?? retorna 
o primeiro operando que não for null nem undefined. E ideal usa-lo para Você só quer tratar null e undefined como valores "ausentes", ou se quiser manter 
valores válidos, como 0, false, ou ''.

Regras:
Valor à esquerda  ->	Retorno de valor ?? 'padrão'
null  -> 	'padrão' (como e null, ele ignora o null e passa string 'padrão')
undefined  ->	'padrão' (como e undefined, ele ignora o undefined e passa a string 'padrão')
0  ->	0 (retorna 0, mesmo 0 sendo considerado um valor null ou falsy)
false  ->	false (false também e retornavel)
'' (string vazia)  ->	'' (também e retornavel) */

/* Exemplo com o operador || logico, o operador || retorna o primeiro valor falsy da esquerda. Valores falsy incluem:
false
0
'' (string vazia)
null
undefined
NaN */
let nome = 0;
let nameNull = null
// Exemplo com o ||
let retornavel = nome || 'Nenhum valor'
// Exemplo com o ??, ele retorna o 0
let retornavelZero = nome ?? 'Nenhum valor'
// Mas caso seja null ele não retorna
let retornavelNull = nameNull ?? 'Nenhum valor'
console.log(retornavel)
console.log(retornavelZero)
console.log(retornavelNull)