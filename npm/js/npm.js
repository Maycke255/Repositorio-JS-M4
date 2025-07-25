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
const dayjs = require('dayjs')
//Usando o plugin que já vem instalado
const customParseFormat = require('dayjs/plugin/customParseFormat')
//Instalando o plugin no pacote
dayjs.extend(customParseFormat)
//import dayjs from 'dayjs' // ES 2015
//O format usamos para definir a data que queremos
const advancedFormat = require('dayjs/plugin/advancedFormat');
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter');

dayjs.extend(advancedFormat);
dayjs.extend(isSameOrAfter);

//Função para o exercicio:
function calculateDate (date) {
    const birthday = dayjs(date, 'DD-MM-YYYY');
    const today = dayjs()

    const yearBirthday = birthday.format('YYYY')
    const youYear = parseFloat(yearBirthday)

    const currentAge = dayjs().subtract(youYear, 'year')
    console.log(currentAge.year())

    const day = birthday.date();
    const month = birthday.month()
    console.log(day, month + 1)

    let nextBirthday = dayjs().set('date', day).set('month', month).set('year', today.year());

    if (nextBirthday.isBefore(today, 'day')) {
        nextBirthday = nextBirthday.add(1, 'year');
    }

    const daysRemaining = nextBirthday.diff(today, 'day');
    console.log(`🎉 Próximo aniversário: ${nextBirthday.format('DD/MM/YYYY')}`);
    console.log(`📆 Faltam ${daysRemaining} dias`);
}


calculateDate('18-02-2004');