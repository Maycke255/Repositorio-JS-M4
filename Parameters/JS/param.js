/* Uma rest param e nada mais nada menos que o resto dos porametros de uma função, ela possibilita declararmos quantos parametros/argumentos quisermos,
por exemplo, declaramos um unico parametro para a função, em seguida podemos passar quantos valores quisermos nesse oarametro, ela e como se fosse uma
array, podemos ate ultilizar metodos de array nesse metodo, mas caso quisermos declarar um argumento a mais na função que vamos usar de maneira especifica
na função, devemos passar antes do rest param */
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