/* Nesse caso aqui, vamos inportar a função, no arquivo anterior, nos a exportamos, aqui vamos exporar, esse e o codigo central onde irão ficar as
inportações. */

//Usamos uma variavel para guardar a importação, e importante que ambas tenham o mesmo nome, apos isso acessamos o arquivo igual a uma referencia
const { somar } = require('./common');
console.log(somar(2, 3)); // 5