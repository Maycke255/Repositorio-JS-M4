/* Primeiro salvamos uma variavel, __dirname é uma variável global do Node.js que representa o caminho da pasta atual do arquivo webpack.config.js.
path.resolve(...) junta esse caminho com 'dist' para formar o caminho completo */
const path = require('path')
//Importando o plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    /* Começamos pelas entradas */
    entry: {
        date: './src/wpack.js', /* vamos passar o nome dessa aqui, que e o arquivo do dayjs como dat, pode ser qualquer nome, o arquivo sera gerado a 
        partir dele */
        hello: './src/hello.js', // Segundo arquivo, do hello, especificamos o caminho
    }, //Você define onde o Webpack colocará o bundle final, no caso o arquivo compilado:
    output: {
        path: path.resolve(__dirname, 'dist'), /* aqui destinamos o seu caminho, como dito anteriormente __dirname refere-se ao diretorio atual onde
        estou, e dist e o nome da pasta que queremos enviar os arquivos compilados */
        filename: '[name].min.js', /* agora uma propriedade bem importante, a filename refere-se ao nome dos arquivos, por padrão o WB da nomes aos
        arquivos de acordo com o nome inseridos na entrada, então usamos esse nome para dar nome aos arquivos, esse 'min' so quer dizer minimizado
        ele não e obrigatorio */
        clean: true
    },
    mode: 'production', /* E necessario quando estivermos codando, não estivermos finalizado o projeto, e necessario mudar para o modo de "development", 
    o production e ultilizado apenas para finalizar tudo e deixar o codigo compilado e finalizado*/
    module: {
        rules: [{ // As rules são regras, o que deve ser feito a partir dessas regras
            test: /\.css$/, //Nessa parte, especificamos em quais arquivos queremos executar os loaders ou plugins, pra isso usamos expressões regulares
            // o $ serve para procurar o ".css" somente nos finais dos arquivos e a contra barra serve para escapar o arquivo
            use: [MiniCssExtractPlugin.loader, 'css-loader'] // Aqui estamos definindo quais loaders ou plugin vamos usar
        }]
    }, plugins: [
        new MiniCssExtractPlugin({ // Aqui na parte de plugins criamos uma instancia com os plugins que queremos usar
            filename: '[name].min.css'
        })
    ]
}

//Se quisermos podemos ate apagar a pasta node_modules depois, que vai funcionar normalmente, se quisermos instalar de novo e so digitar
// npm install no terminal que ele vai ler o conteudo do package.json e instalar tudo de novo, para instalar o WP e so rodar 
// npm install --save-dev webpack webpack-cli

/* ---------- RESUMINDO ---------- 
                     Loaders	                             Plugins
O que faz	    Transformam arquivos individuais	    Estendem e controlam o processo inteiro
Quando atuam	Durante o parsing/import de arquivos	Em etapas específicas do build (compilação, emissão, etc.)
Exemplo	        babel-loader, css-loader	            MiniCssExtractPlugin, HtmlWebpackPlugin*/