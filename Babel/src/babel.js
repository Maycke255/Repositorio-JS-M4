/* Usando arquivos JSON e atualizando codigos modernos para codigos antigos para que funcionem em navegadores mais antigos e versões mais desa-
tualizadas, após fazer tudo isso, com o codigo já finalizado podemos ate apagar o babel, claro se não for mais fazer essa duplicidade, mas e
quase impossivel, afinal uma hora ou outra teremos que dar manutenção bno site, e apos isso vamos precisar do babel para atualizar as manute-
nções também. Antes de tudo, precisamos iniciar o projeto npm dentro da pasta pai onde contem os arquivos usando:
npm init -y

Após isso precisamos instalar o babel nos arquivos para realizar os demais processos, usamos:
npm install --save-dev @babel/core @babel/cli @babel/preset-env

Após isso, o babel e essas demais bibliotecas seram instaladas dentro da pasta, após isso precisamos configurar o babel para fazer o que queremos
Primeiro criamos esse arquivo dentro da nossa pasta: babel.config,json
Pronto, com o arquivo de configuração já criado, colocamos esse código no arquivo:
{
  "presets": ["@babel/preset-env"]
}  // Esse código vai mirar dentro da pasta babel

OBS: Em vez de criarmos o babel.config.json, podemos criar também o babel.config.js, mas e um arquivo poderoso, usado em aplicações mais complicadas
e maiores, podemos escrever código js nele, como comentarios, if else, export e import (export e import do common), já o json e para aplicações
médias ou pequenas, mais simples.

Por fim, vamos compilar o código já formatado para a versão antiga, rodamos no terminal:
npx babel src --out-dir dist (aqui estamos usando o babel para pegar o arquivo dentro de src, se tivessem mais arquivos na pasta leria e co-
mpilaria todos os arquivos dentro dela, ele esta pegando todos os arquivos e mandando para a pasta dist)

OBS: Se quisermos podemos também colocar esses códigos no package.json como atalhos, no caso colocariamos assim:
    "build": "babel src --out-dir dist", <- serve para transpilar os arquivos da src/ para dist/
    "watch": "babel src --out-dir dist --watch", -< serve para ficar observando alterações na src/ e recompila automaticamente
    "start": "node dist/babel.js" <- serve para executar o arquivo JS gerado (caso seja um script que roda com node)

Depois no terminal podemos so rodar "npm run build" por exemplo.
    */

const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}

// A propriedade phone e ddd não existe, então retorna apenas undefined e não da erro
const acess = user?.friends[0]?.phone?.ddd

// Uma boa coisa e verificar se a opção não existe e exibir um alerta para o usuario
if (acess === undefined) {
    console.log('O conteudo não existe.')
}