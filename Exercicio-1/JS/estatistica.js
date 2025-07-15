/* De acordo com os conhecimentos aprendidos nesse módulo sobre recursos do javascript moderno, crie quatro funções que aceitem qualquer quantidade de 
parâmetros e utilizando a sintaxe de *arrow functions* para calcular as operações abaixo.
Essas funções devem mostrar o resultado de alguma forma em texto porém não é necessário implementar uma interface. Para testar a função você pode fazer
chamadas manuais a ela no javascript ou utilizar o console do navegador (qualquer função incluída na página pode ser chamada diretamente no console).

Operações:
--------------------------------------------------------------------------------------------------------------------------------------------------------
Média Aritmética Simples: Pode ser calculada somando todos os valores e dividindo o total da soma pela quantidade de valores.
Exemplo: */
// media(2, 6, 3, 7, 4) === 4.4
// // porque
// 2 + 6 + 3 + 7 + 4 === 22
// // e 
// 22 / 5 === 4.4
/*-----------------------------------------------------------------------------------------------------------------------------------------------------
​
-------------------------------------------------------------------------------------------------------------------------------------------------------
Média Aritmética Ponderada: Semelhante à média aritmética simples, porém é possível atribuir um peso a cada valor informado, fazendo com que ele tenha
um valor proporcionalmente diferente dos outros. Pode ser calculada somando as multiplicações dos valores pelos seus respectivos pesos e dividindo o
total pela soma dos pesos.
Exemplo: */
// n -> número, p -> peso
// mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
// // porque
// (7 * 2) + (9 * 5) + (3 * 1) === 62
// // e
// 62 / (2 + 5 + 1) === 7.75
/*------------------------------------------------------------------------------------------------------------------------------------------------------
​
--------------------------------------------------------------------------------------------------------------------------------------------------------
Mediana: Pode ser calculada encontrando o valor central de uma sequência de números crescente ou decrescente. Caso existam dois números centrais, a mediana é calculada através da média aritmética simples desses dois números.
Exemplo: */
// mediana(2, 4, 5, 7, 42, 99) === 6
// // porque 5 e 7 estão juntos no centro da sequência e
// media(5, 7) === 6

// mediana(15, 14, 8, 7, 3) === 8
// porque 8 está no centro da sequência
/*------------------------------------------------------------------------------------------------------------------------------------------------------
​
--------------------------------------------------------------------------------------------------------------------------------------------------------
Moda: Pode ser calculada encontrando o valor que mais se repete em um dado conjunto.
Exemplo: */
// moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) === 4
// porque:
// 4 aparece 4 vezes
// 5 e 1 aparecem 2 vezes
// 9, 7, 3, 2 e 0 aparecem 1 vez
/*----------------------------------------------------------------------------------------------------------------------------------------------------*/

// Resolução:
//Média Aritmética Simples:
document.getElementById('btnCalculateMS').addEventListener('click', function () {
    const MSText = document.getElementById('mediaSimples').value.trim();

    if (MSText === '') {
        alert('Por favor, preencha a caixa de texto com números separados por vírgula.');
        return;
    }

    const MSArr = MSText.split(', ').map(n => Number(n.trim()))
    
    if (MSArr.length === 0) {
        alert('Nenhum número válido foi inserido.');
        return;
    }

    let MSSum = MSArr.reduce((a, b) => a + b, 0)
    console.log(MSSum)

    let MSArrLength = MSArr.length
    console.log(MSArrLength)
    
    let MSDivide = MSSum / MSArrLength;

    alert(`O resultado da soma foi: ${MSSum}, e o resultado da divisão foi: ${MSDivide.toFixed(2)}.`)
    console.log(MSDivide)
});

//Média Aritimetica Ponderada:
document.getElementById('btnCalculateMP').addEventListener('click', function () {
    const MPNumInput = document.getElementById('mediaPonderadaV').value.trim();
    const MPWeightInput = document.getElementById('mediaPonderadaP').value.trim();

    if (MPNumInput === '' || MPWeightInput === '') {
        alert('Por favor, preencha a caixa de texto com números separados por vírgula.');
        return;
    }

    const MPNumArr = MPNumInput.split(', ').map(n => Number(n.trim()));
    const MPWeightArr = MPWeightInput.split(', ').map(n => Number(n.trim()));

    if (MPNumArr.length === 0 || MPWeightArr.length === 0 ) {
        alert('Nenhum número válido foi inserido.');
        return;
    }

    let MPNumSum = MPNumArr.reduce((accumulator, number, index) => accumulator + number * MPWeightArr[index], 0);
    let MPWeightSum = MPWeightArr.reduce((accumulator, number) => accumulator + number, 0);

    const MPEnd = MPNumSum / MPWeightSum;

    alert(`O resultado da media pondera dos números ${MPNumArr.join(', ')} com os pesos ${MPWeightArr.join(', ')} é: ${MPEnd.toFixed(2)}, pois o resultado da multiplicação dos números com os pesos é: ${MPNumSum} e o 
    resultado da soma dos pesos é ${MPWeightSum}, portanto o peso desse conjunto de números é ${MPEnd.toFixed(2)}.`)
    console.log(MPEnd)
});

//Mediana:
document.getElementById('btnCalculateM').addEventListener('click', function (){
    const MInput = document.getElementById('mediana').value.trim();

    if (MInput === '') {
        alert('Por favor, preencha a caixa de texto com números separados por vírgula.');
        return;
    }
    
    let MArr = MInput.split(', ').map(n => Number(n.trim()));
    
    if (MArr.length === 0) {
        alert('Nenhum número válido foi inserido.');
        return;
    }

    let MOrdered = MArr.sort((a, b) => a - b);
    console.log(MOrdered)
    let Mmid = Math.floor(MOrdered.length / 2); /* MOrdered.length pega o tamanho da lista de números já ordenada, ao dividir por 2, você tenta descobrir
    a posição do meio, Math.floor() arredonda para baixo, pois em JavaScript: Se a lista tiver tamanho 5 → 5 / 2 = 2.5, e Math.floor(2.5) vira 2Se for 
    tamanho 4 → 4 / 2 = 2, e Math.floor(2) fica 2 também, esse meio será usado como índice (posição no array). */
    console.log(Mmid)
    
    let median;

    if (MOrdered.length % 2 !== 0) { /* Como funciona essa verificação:
        Ela verifica se o tamanho da array e impar, ela verifica se tem resto dividido por 2, por exemplo:
        Ex: 5 % 2 = 1 → ímpar ✅
        Ex: 6 % 2 = 0 → par ❌

        Como funciona a divisão por resto:
        A divisão por resto literalmente verifica quanto quanto daquele divisor cabe dentro do número, exemplo: if (7 % 4) -
        Pergunta: Quantas vezes o número 4 cabe dentro do 7 sem ultrapassar?
        1 vez: 4 × 1 = 4
        2 vezes: 4 × 2 = 8 ❌ ultrapassa!
        Então, cabe 1 vez
        4 × 1 = 4
        Agora: quanto sobra até chegar no 7?
        7 - 4 = 3 → esse é o resto, então se tivesse um número 7, daria impar, então 3 e !== de 0 */
        median = MOrdered[Mmid]
    } else {
        /* caso a MOrdered seja par, (6 % 2 === 0), afinal o 2 cabe 3 vezes dentro de 6 e não ultrapassa e nem sobra nada, então ele pega os dois numeros
        centrais */
        median = (MOrdered[Mmid - 1] + MOrdered[Mmid]) / 2
    }

    alert(`A mediana dos números inseridos é: ${median}.`)
    console.log(median)
});

//Moda:
document.getElementById('btnCalculateModa').addEventListener('click', function () {
    const MDInput = document.getElementById('moda').value.trim();

    if (MDInput === '') {
        alert('Por favor, preencha a caixa de texto com números separados por vírgula.');
        return;
    }

    let MDArr = MDInput.split(', ').map(n => Number(n.trim()));

    if (MDArr.length === 0) {
        alert('Nenhum número válido foi inserido.');
        return;
    }

    let MDCounting = {}
    /* imagine o array assim: [3, 1, 3, 7, 1], ao final da contagem o objeto MDCounting vai ficar assim: 
    {
        1: 2,
        3: 2,
        7: 1
    }
    Ou seja: o número 1 aparece 2 vezes, o número 3 aparece 2 vezes, o número 7 aparece 1 vez. Então contagem[num] guarda o contador de cada número.*/
    let Maxfrequency = 0;
    let modas = []

    MDArr.forEach(num => {
        /* Se o número já existe no objeto contagem, soma mais 1.
        Se não existe ainda, ele usa 0 (por isso o || 0) e soma 1. Ele praticamente esta dizendo, "caso não exista coloque ele como 0 e some +1" */
        MDCounting[num] = (MDCounting[num] || 0) + 1;

        /* Esse if serve para manter atualizado o maior número de repetições (frequência). Ele compara a frequência atual do número com a maior 
        frequência já vista e atualiza se necessário.
        Exemplo: Primeiro número: 3
        MDCounting[3] = 1
        Maxfrequency = 0 inicialmente
        Como 1 > 0, atualiza Maxfrequency = 1
        
        Segundo número: 1
        MDCounting[1] = 1
        1 > 1 ❌ (falso), Maxfrequency continua 1

        Terceiro número: 3 (de novo)
        MDCounting[3] agora é 2
        2 > 1 ✅ (verdadeiro), então Maxfrequency = 2 */
        if (MDCounting[num] > Maxfrequency) {
            Maxfrequency = MDCounting[num]
        }
    });

    /* Parte do código	O que faz
    for (let num in contagem)	Percorre cada chave (número) do objeto
    contagem[num] === maxFrequencia	Verifica se aquele número é o mais repetido
    modas.push(Number(num))	Adiciona o número convertido para array modas */
    for (let num in MDCounting) {
        if (MDCounting[num] === Maxfrequency) {
            modas.push(Number(num))
        }
    }

    alert(`A moda da sequencia de numeros inserida e: ${modas}`);
    console.log(modas)
});