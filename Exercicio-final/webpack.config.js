const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { HtmlWebpackPlugin } = require("html-webpack-plugin");
// const { mode } = require('../webpack-aula/webpack.config');

module.exports = {
    entry: {
        index: './src/js/index.js'
    }, output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    mode: 'development',
    plugins: [
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