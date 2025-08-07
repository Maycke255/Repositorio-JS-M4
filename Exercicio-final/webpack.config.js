const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist/public')
        }
    },
    entry: {
        index: './src/js/index.js'
    }, output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    mode: 'production',
    plugins: [
        //ATIVAR PLUGIN SOMENTE QUANDO ENTRAR NO MODO DEVELOPMENT
        // new CleanWebpackPlugin(), /* Evita que arquivos antigos fiquem sobrando na pasta dist depois de uma nova build. Ele limpa a pasta 
        // dist automaticamente antes de gerar os novos arquivos. */
        new HtmlWebpackPlugin({
            template: './public/index.html', //Onde esta o arquivo principal
            filename: 'public/main.html' //Nome que o arquivo vai ter ao ser gerado
        }),
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,  // ignora bibliotecas
            use: 'babel-loader' // passa pelo Babel
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    }
}