/* 
Ferramenta	                      Para que serve
NPM	       Gerenciador de pacotes (instala Babel, Webpack, plugins, loaders, etc.)
Webpack	   Empacotador que junta tudo (JS, CSS, imagens) num único bundle
Loaders	   Dizem ao Webpack como lidar com arquivos especiais (CSS, TS, etc.)
Plugins	   Complementam o Webpack (gerar HTML, extrair CSS, limpar pasta, etc.)
Babel	   Transpila código moderno JS/ES6+ para versões antigas (ES5)
Modules	   Organização do seu código (CommonJS ou ESModules)

_________COMO ORGANIZAR_________
1. Inicialize o projeto com NPM
bash
Copiar
Editar
npm init -y
Cria o package.json, que vai gerenciar seus pacotes e scripts.

2. Instale as bibliotecas que você vai usar (ex: dayjs)
bash
Copiar
Editar
npm install dayjs
Essas são dependências normais, que vão para o seu código.

3. Instale o Webpack + ferramentas de desenvolvimento
bash
Copiar
Editar
npm install --save-dev webpack webpack-cli
Webpack vai controlar a "construção" do seu projeto.

4. Instale os loaders e plugins necessários
bash
Copiar
Editar
npm install --save-dev \
babel-loader @babel/core @babel/preset-env \
style-loader css-loader mini-css-extract-plugin \
html-webpack-plugin clean-webpack-plugin
5. Crie a estrutura de pastas organizada
pgsql
Copiar
Editar
meu-projeto/
├── src/
│   ├── index.js
│   └── style/
│       └── style.css
├── index.html
├── webpack.config.js
├── .babelrc
├── package.json
6. Configure o Webpack (webpack.config.js)
Aí você junta tudo: loaders, plugins, entradas, saídas, etc.

7. Configure o Babel (.babelrc)
json
Copiar
Editar
{
  "presets": ["@babel/preset-env"]
}
8. Use os scripts no package.json
json
Copiar
Editar
"scripts": {
  "build": "webpack",
  "start": "webpack --watch"
}
Assim você pode rodar npm run build para empacotar tudo.

9. Durante o desenvolvimento:
Você vai usar ESModules (import/export), CSS, JS moderno (ES6+), etc.

Vai importar libs como dayjs, etc.

10. Quando terminar o projeto:
O Webpack + Babel já vão garantir que:

O código seja compatível com navegadores antigos (graças ao Babel)

O CSS seja separado (MiniCssExtractPlugin)

O HTML seja gerado automaticamente com os scripts incluídos (HtmlWebpackPlugin)

A pasta dist/ esteja limpa e pronta para deploy (CleanWebpackPlugin) */