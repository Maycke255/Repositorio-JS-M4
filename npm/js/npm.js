/* ### Datas com dayjs
Nesse exercício você irá treinar uma habilidade muito importante para qualquer programador, a capacidade de aprender a utilizar bibliotecas de 
terceiros. Você deverá criar uma função javascript que recebe como parâmetro a data de nascimento de uma pessoa no formato string e mostre no 
terminal a idade dessa pessoa no dia atual, sua próxima data de aniversário no formato “DD/MM/AAAA” e quantos dias faltam para o próximo 
aniversário dela. Para isso, você deverá utilizar o módulo **dayjs**, disponível no npm. Para aprender a utilizar o dayjs você deverá acessar o 
site do npm (https://www.npmjs.com/) e pesquisar por esse módulo. A página da dayjs no npm irá mostrar como utilizar essa biblioteca. Você 
também deve consultar a documentação do dayjs, disponível em https://day.js.org/. Nessa aplicação você não utilizará o browser, **você deverá 
utilizar o Node.js**. Para executar seu arquivo com o Node.js basta acessar a pasta onde ele está localizado com o terminal e digitar o comando 
`node seu_arquivo.js`. Além disso, **você deverá utilizar a sintaxe dos módulos CommonJS** para trabalhar com o dayjs, ou seja, a função `require()`.
**Dica:** Para resolver o exercício tente procurar pelos métodos de adicionar um intervalo de tempo a uma data (add), calcular a diferença entre 
uma data e outra (diff) e exibir uma data em um formato específico (format). */

//Importando o pacote com o node
//import dayjs from 'dayjs' // ES 2015
const dayjs = require('dayjs')
//Usando o plugin que já vem instalado
const customParseFormat = require('dayjs/plugin/customParseFormat')
const advancedFormat = require('dayjs/plugin/advancedFormat');
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');

//Instalando os plugins no pacote
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat);
dayjs.extend(isSameOrAfter);

//Função para o exercicio:
function calculateDate (date) {
    const birthday = dayjs(date, 'DD-MM-YYYY');
    const today = dayjs()

    const yearBirthday = birthday.format('YYYY')
    const youYear = parseFloat(yearBirthday)

    //isso aqui pega o ano que ele digitou e subtrai pelo ano atual
    const currentAge = dayjs().subtract(youYear, 'year')
    console.log(`Você tem ${currentAge.year()} anos.`)

    const day = birthday.date();//Primeiro pegamos cada um separadamente, primeiro o dia
    const month = birthday.month()//Depois o mês
    // console.log(day, month + 1)//Os meses começam em 0 assim como as listas, então adicionamos mais 1

    //Aqui nos criamos uma variavel armazenando as partes da data de aniversario com a data atual
    /* O objeto "set" serve para modificar as partes da data, ele serve para setar algo, exemplo:
    set('date', day) = nesse caso estamos pegando a data atual do dia de HOJE e estamos modificando para a data do aniversario
    set('month', month) = estamos pegando o mês atual e substituindo pelo mês do aniversario
    set('year', today.year() = lembrando que no inicio salvamos uma variavel com a data do dia de hoje, então nesse caso pegamos apenas o ano) */
    let nextBirthday = dayjs().set('date', day).set('month', month).set('year', today.year());

    /* Aqui verificamos se o aniversario já passou ou ainda esta por vir, a propriedade isBefore verifica se uma data for antes da segunda,
    por exemplo: 18-02-2004 veio antes de HOJE, estamos verificando se essa data veio antes da data de hoje, caso tenha vindo, adiociona mais
    1 ano, que significa que o aniversario já passou e sera no ano que vem */
    if (nextBirthday.isBefore(today, 'day')) {
        nextBirthday = nextBirthday.add(1, 'year');
    }

    //Essa variavel serve para calcular a difereça entre uma data e outra, ela calcula quanto tempo falta do proximo aniversario ate os dias de hoje
    const daysRemaining = nextBirthday.diff(today, 'day');

    console.log(`🎉 Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`);
    console.log(`📆 Faltam ${daysRemaining} dias`);
}

module.exports = calculateDate;