/* Os loaders no Webpack são responsáveis por transformar arquivos que não são JavaScript (como CSS, imagens, TypeScript, etc.) em módulos que o Webpack
consegue entender e empacotar. Por padrão, o Webpack só entende arquivos JavaScript (ESM/CommonJS). Se você tentar importar um arquivo .css, .png,
.ts, etc., ele não vai saber o que fazer — a não ser que você use loaders.
import '../style/style.css'; // isso só funciona se você tiver loaders configurados
 - Cada loader é configurado com uma regra (test) que diz: "se encontrar arquivo com tal extensão, use esse loader".
 - Ele transforma o conteúdo do arquivo para algo que o Webpack possa incluir no bundle. 
 
 🛠️ Exemplos comuns de loaders:
Arquivo que você importa - Loader necessário	 -      O que ele faz
.css	                css-loader + style-loader	    Lê o CSS e injeta como <style> no HTML
.scss	                sass-loader	                    Converte SCSS → CSS (junto com os loaders acima)
.ts	                    ts-loader ou babel-loader	    Transpila TypeScript para JavaScript
.js moderno (ES6+)      babel-loader	                Converte ES6+ para ES5 usando Babel
imagens (.png, .jpg)	file-loader ou asset	        Copia a imagem e retorna uma URL
fontes (.woff, .ttf)	file-loader	                    Copia e gera um caminho para a fonte no build final

Prumeiro precisamos salvar os loaders: 
npm install --save-dev style-loader css-loader

Exemplo de configuração:
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,                 // para arquivos .css
        use: ['style-loader', 'css-loader'] // aplica da direita para a esquerda
      },
      {
        test: /\.(png|jpg|gif)$/,      // imagens
        type: 'asset/resource'          // webpack 5 (substitui file-loader)
      }
    ]
  }
};*/