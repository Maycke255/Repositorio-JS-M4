/* Modulos em JS são usados para manter a organização e manutenção do codigo JS, são usados como livros de compartilhamento de código literalmente,
eles são agrupamentos de códigos separados de formas distintas, mas que também podem ser adicionados ou removidos dos softwares, facilitando assim
sua reusabilidade. O commonJS ultiliza o Node.JS como sistema de gerenciamento de modulos, atravez dele podemos gerenciar os modulos, não e tão
utilizado como antes, talvez venha ate ser descontinuado, pois não e integrado diretamente com o JS, e necessario do Node para rodar.  */

/*  Características:
Utiliza require para importar módulos.
Utiliza module.exports ou exports para exportar.
Sincrônico (ideal para ambientes como Node, onde os arquivos estão no disco). */

/* Podemos exportar e inportar o que quisermos, como arrays, objetos, variaveis, functions, nesse caso vamos exportar a function somar */
function somar(a, b) {
  return a + b;
}
module.exports = { somar };

//Nesse caso eu precisaria estar o usando o Node para visualizar a depuração do codigo, mas ele estaria agindo igual ao terminal verificando o codigo