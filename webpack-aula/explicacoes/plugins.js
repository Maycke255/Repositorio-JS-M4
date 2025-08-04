/* No Webpack, os plugins são usados para executar tarefas mais complexas e poderosas durante o processo de empacotamento, 
além do que os loaders fazem. 
Resumo simples:
Loaders → transformam arquivos individuais (ex: .css, .ts, .jpg).
Plugins → expandem ou modificam o comportamento do Webpack como um todo (ex: gerar HTML, limpar pastas, minificar, copiar arquivos, etc.).

Exemplo de plugins:
Plugin	                                     O que ele faz
HtmlWebpackPlugin	     Gera um arquivo index.html com o bundle JS automaticamente incluído.
CleanWebpackPlugin	     Limpa a pasta dist/ antes de cada build.
MiniCssExtractPlugin	 Extrai o CSS para arquivos separados (em vez de inline no JS).
CopyWebpackPlugin	     Copia arquivos estáticos (imagens, fontes) para a pasta de build.
DefinePlugin	         Injeta variáveis globais no código (como process.env.NODE_ENV).

Ainda devemos deixar a importação do arquivo js: import '../style/style.css'

Exemplo de configuração para a importação:
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
     Começamos pelas entradas
    entry: {
        date: './src/wpack.js', /* vamos passar o nome dessa aqui, que e o arquivo do dayjs como dat, pode ser qualquer nome, o arquivo sera gerado a 
        partir dele
        hello: './src/hello.js', // Segundo arquivo, do hello, especificamos o caminho
    }, //Você define onde o Webpack colocará o bundle final, no caso o arquivo compilado:
    output: {
        path: path.resolve(__dirname, 'dist'), /* aqui destinamos o seu caminho, como dito anteriormente __dirname refere-se ao diretorio atual onde
        estou, e dist e o nome da pasta que queremos enviar os arquivos compilados 
        filename: '[name].min.js', /* agora uma propriedade bem importante, a filename refere-se ao nome dos arquivos, por padrão o WB da nomes aos
        arquivos de acordo com o nome inseridos na entrada, então usamos esse nome para dar nome aos arquivos, esse 'min' so quer dizer minimizado
        ele não e obrigatorio
        clean: true
    },
    mode: 'development', /* E necessario quando estivermos codando, não estivermos finalizado o projeto, e necessario mudar para o modo de "development", 
    o production e ultilizado apenas para finalizar tudo e deixar o codigo compilado e finalizado
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    }, plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        })
    ]
}*/