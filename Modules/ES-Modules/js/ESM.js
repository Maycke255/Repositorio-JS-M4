/* O ES Modules já e o mais usado e recomendado, pois e caietado pelos navegadores mais modernos, ele e diferente do common, pois não usa o Node.js.
Caracteristicas:
Usa import e export.
Assíncrono (ótimo para web, onde os módulos podem ser carregados pela rede).
Mais padronizado e suportado nativamente em browsers modernos. */

//Aqui vamos definir a exportação, esse vai ser o arquivo raiz, vamos definir os codigos aqui:
//Nesse caso colocamos a palavra reservada export antes da função
export function somar(a, b) {
  return a + b;
}

//Para os demais codigos a mesma coisa:
export const name = 'Maycke'
export const arr = ['Elden ring', 'Dark Souls 3']
export const { games } = arr