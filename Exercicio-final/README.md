# Exercicio Final do modulo 4 de JS avançado
🧠 Versão 1.00

---

## O que foi feito primeiro?

### Inicialização do npm na pasta pai e instalação dos pacotes, plugins e dependencias de devs que vamos usar:
1. **Instalando pacotes que usaremos:**

    ` npm i uuid ` **->** Gera identificadores únicos (UUIDs). Muito usado para criar IDs aleatórios. Usaremos essa biblioteca simples apenas como aprendizado e para ter um codigo na aplicação mesmo.

    ` npm install --save-dev mini-css-extract-plugin ` **->** Mini gerador de arquivos CSS, ele gera um arquivo CSS separado que e inserido no arquivo JS principal.
    
    ` npm install --save-dev webpack webpack-cli ` **->** Instalando pacote do webpack com seu compilador.

    ---

    **Loaders e plugins necessarios:**

    ` npm i --save-dev babel-loader @babel/core @babel/preset-env style-loader css-loader html-webpack-plugin clean-webpack-plugin webpack-dev-server `