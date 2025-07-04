/* Arrow functios são apenas uma versõa mais otimizada do JS moderno de escrever funções anonimas de forma simples, pratica
e mais legivel, não usamos a palavra function nem damos um nome a função, passamos somente um sinal de igual e maior apos os argumentos
representando uma flecha, ela permite retornar uma função em linha unica caso seja uma função simples ou funções callBacks curtas. (Obs:
não podemos acessar o this dentro de uma arrow function) */

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

//Exemplo de erro usando this:
const thisName = {
    //Funciona normalmente, o this e o nome
    nome: 'Maycke',
    falarFcnNormal: function () {
        console.log(`Função normal usando o this: ${this.nome}`)
    },
    //Não funciona, da undefined
    falarFncArr: () => console.log(`Arrow Function: ${this.nome}`)
};

thisName.falarFcnNormal();
thisName.falarFncArr();

//=============================================================
// COMO FUNCIONA A DESESTRUTURAÇÃO DAS ARRAYS E OBJETOS (Aproveitar esse arquivo para escrever sobre desestruturação também).
//=============================================================
/* A desestruturação de uma array e algo simples, e a extração de elementos de uma array ou objeto e transforma-las em uma variavel para usa-las no codigo,
criamos a variavel normalmente, apenas chamamos o nome da variavel com chaves {}, isso para objetos normais, apos isso referenciamos o nome da variavel
onde estamos desestruturando*/
const people = {
    name: 'Maycke',
    age: 21,
    job: ['front-end developer', 'UX and UI Designer']
};

const {name} = people;
console.log(name);

/* No caso das arrays e diferente, podemos dar os nomes que quisermos, mas e importante prestar atenção na ordem, caso atrapalhe a ordem fica bagunçado
por que o job1 = front-end developer e o job2 = UX and UI Designer, a ordem que as strings estão na array não e alterada, caso coloquemos o job2 em
primeiro, vai ficar: job2 = front-end developer e o job1 = UX and UI Designer, ordem não muda */
const [job1, job2] = people.job;
console.log(job1, job2);

/* A desestruturação é um recurso do JavaScript que permite extrair dados diretamente de objetos ou arrays e atribuí-los a variáveis individuais de 
forma prática. Essa função recebe um parâmetro person (que é um objeto igual ao people) e retorna um novo objeto com os mesmos dados, a função está 
acessando cada propriedade individualmente de person, isso é legal, mas repetitivo.*/
function fnPeople (person) {
    return{ name: person.name,
        age: person.age,
        job: person.job,
    }
}

const display = fnPeople(people);
console.log(display)

//===========================

// Estudo um pouco mais aprofundado e avançado:
const newPeople = [
    {name: 'Wellington',
        age: 49,
        job: ['Sales', 'Developer', 'keyboardist']
    }, {name: 'Moisés',
        age: 35,
        job: ['Accountant']
    }
];

//podemos acessar com o loop for também, mais antigo, acessamos o segundo elemento pela sua posição, e depois acessamos o nome do objeto e assim por diante
for (let i = 0; i < newPeople[1].job.length; i++) {
    const element = newPeople[1].job[i];
    console.log(element)
}

/* Se quisermos pegar somente a array inteira do segundo objeto, referenciamos assim */
const [, { job }] = newPeople
console.log(job)

/* Se quisermos algo mais especifico, podemos pegar o primeiro objeto, com o job dele que e uma array na segunda posição, ou seja, estamos acessando
um objeto que contem uma array dentro, e acessando uma string dentro dessa array */
const [jobDeveloper] = newPeople[0].job[1]
console.log(jobDeveloper)

/* Nesse caso aqui estamos chamando parametros da função desestruturando a array de objetos, precisamos colocar os parametros da função com os mesmos nom
es dos objetos, assim ele vai procurar por esses objetos dentro da variavel newPeople que associamos abaixo chamando a função na variavel displayNewPeople
e com essas referencias retornamos dentro da função os seus parametros */
function fnNewPeople ({name, age, job}) {
    return {name, age, job};
};

const displayPeople = fnNewPeople(newPeople[0]);
console.log(displayPeople)
