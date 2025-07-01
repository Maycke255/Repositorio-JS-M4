/* Arrow functios são apenas uma versõa mais otimizada do JS moderno de escrever funções anonimas de forma simples, pratica
e mais legivel, não usamos a palavra function nem damos um nome a função */

//Funções normais:
function sum (a, b) {
    return a + b
};
console.log(sum(2, 2));

//Função anonima normal
const funAnm = function (a, b) {
    return a + b
}
console.log(funAnm(5, 5));

//Função anonima:
const arrFun = (a, b) => {
    return a + b
};
console.log(arrFun(10, 10));

//Função anonima em uma linha sem usar chaves e return:
const funAnmInline = (a, b) => a - b;
console.log(`Subtração: ${funAnmInline(5, 2)}`);

//Arrow Function em uma linha sem usar parenteses e sem return e sem chaves:
const speedArrFun = double => `O dobro de ${double} é ${double * 2}`;
//Dessa vez passamos direto uma variavel com um numero salvo dentro
const number = 30;
console.log(speedArrFun(number));

//Exemplo:
/* Explicando o resto: Queremos saber quais numeros tem o seu numero final com digito 2, então pegamos o numero e verificamos
quantas vezes cabe 10 dentro daquele numero ate chegar no RESTO 2, resto no caso e o que sobraria após essa verificação.
EXEMPLO CLARO: estamos usando o 10 para verificar, então no caso ->
NUMERO INICIAL = 32
QUANTAS VEZES CABE 10 DENTRO DE 32? RESPOSTA = CABE 3 VEZES (10 * 3 = 30, não cabe mais se for 10 4 vezes vai passar do numero
inicial).
QUAL NUMERO RESTOU? 32 - 30(RESULTADO DA QUANTIDADE) = 2 <- ESSE E O RESTO! VERIFICAÇÃO BATE.
=============
Outro exemplo: vamos verificar o numero 45 presente, vamos ver quantos 10 cabe dentro do 45.
No caso: 10 * 4 = 40, cabe 4 vezes apenas, se for 5 vai passar.
45(Número solicitado) - 40(Quantidade cabivel dentro dele) = 5 <- esse e o resto! verificação era para ver se o resto iria ser
igual a 2, então a verificação falhou. */
const numbers = [10, 14, 12, 22, 16, 30, 38, 32, 35, 42, 45];
const numbersWith2 = numbers.filter(numberTwo => numberTwo % 10 === 2).join(", ");
console.log(`Números com 2 no final: ${numbersWith2}`);

const numbersDouble = numbers.map(double => double * 2).join(", ");
console.log(`Dobro dos numeros: ${numbersDouble}`);