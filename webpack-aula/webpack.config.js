/* Primeiro salvamos uma variavel, __dirname é uma variável global do Node.js que representa o caminho da pasta atual do arquivo webpack.config.js.
path.resolve(...) junta esse caminho com 'dist' para formar o caminho completo */
const path = require('path')

module.exports = {
    /* Começamos pelas entradas */
    entry: {
        date: './src/wpack.js', /* vamos passar o nome dessa aqui, que e o arquivo do dayjs como dat, pode ser qualquer nome, o arquivo sera gerado a 
        partir dele */
        hello: './src/hello.js', // Segundo arquivo, do hello, especificamos o caminho
    //     style: './style/style.css' // No caso do CSS ou qualquer outro arquivo, também precisamos definir uma entrada
    }, //Você define onde o Webpack colocará o bundle final, no caso o arquivo compilado:
    output: {
        path: path.resolve(__dirname, 'dist'), /* aqui destinamos o seu caminho, como dito anteriormente __dirname refere-se ao diretorio atual onde
        estou, e dist e o nome da pasta que queremos enviar os arquivos compilados */
        filename: '[name].min.js', /* agora uma propriedade bem importante, a filename refere-se ao nome dos arquivos, por padrão o WB da nomes aos
        arquivos de acordo com o nome inseridos na entrada, então usamos esse nome para dar nome aos arquivos, esse 'min' so quer dizer minimizado
        ele não e obrigatorio */
        clean: true
    },
    mode: 'development', /* E necessario quando estivermos codando, não estivermos finalizado o projeto, e necessario mudar para o modo de "development", 
    o production e ultilizado apenas para finalizar tudo e deixar o codigo compilado e finalizado*/
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
}

//Se quisermos podemos ate apagar a pasta node_modules depois, que vai funcionar normalmente, se quisermos instalar de novo e so digitar
// npm install no terminal que ele vai ler o conteudo do package.json e instalar tudo de novo, para instalar o WP e so rodar 
// npm install --save-dev webpack webpack-cli