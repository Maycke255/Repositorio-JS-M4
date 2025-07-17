/* Esse e o arquivo de expotação, onde vamos estar usando os codigos que exportamos no outro araquivo, ele e mais pratico que o common JS, usamos 
apenas chaves para referenciar os nomes dos modulos que estamos importando, precisam ser os mesmos nomes, para que o arquivo encontre exatamnte
quais são as importações */

// Usamos a palavra from para referenciar o arquivo de exportação, da onde estamos exportando
import { somar, arr } from "./ESM.js";
const [ games ] = arr

console.log(somar(4, 2))
console.log(games)

//Inportando o default, dessa vez não usamos as chaves, e ele também não precisa do "as" para ser renomeado, podemos passar o nome que quiser na importação
import Ola from './ESM.js'
console.log(Ola())

/* Caso quisessemos inportar tudo junto, também poderiamos(Obs: Não podemos dar o nome que quisermos quando importarmos, temos que usar o mesmo nome,
mas podemos substituir usando o "as"): */
import { name2 as nameContador, name3 as nameW } from "./ESM.js"
console.log(nameContador, nameW)

//Se quisessemos importar o default junto também, passamos apenas o nome da default ANTES de todos:
/* import Ola, { name2 as nameContador, name3 as nameW } from "./ESM.js" */