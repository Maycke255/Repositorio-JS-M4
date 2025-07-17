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

//Exportação em grupo:
/* A exportação em grupo e algo mais para se organizar o código, ela exporta todos os códigos de uma vez, nela usamos chaves para referenciar o que
queremos exportar, exemplo:
export { name, arr, somar } */

/* No caso do export defalut e diferente, não podemos salvar nada em variaveis diretamente, não podemos fazer export default const name = 'Hello World!'
isso da erro, precisamos exportar diretamente o que queremos, a não ser uma function, ai sim usamos export default function name () {}. Em um arquivo de
exportação so pode haver SOMENTE UM EXPORT DEFAULT, afinal default quer dizer padrão, não faz sentido ter mais de um padrão, então se declararmos outra
export default e a mesma coisa de estarmos duplicando o export default que já existe criado. */

//Essa exportação e a forma mais comum, e a forma de exportação inline
export default function Ola () {
  return 'Hello World!'
}

//Mas também podemos usar ela não-inline, podemos apenas declarar elas em qualquer lugar doo codigo usando apenas export {...} <- dessa forma
//Export default não-inline, exportamos assim, muito mais simples
// export default Ola

const name2 = 'Moises'
const name3 = 'Wellington'
export {name2, name3}