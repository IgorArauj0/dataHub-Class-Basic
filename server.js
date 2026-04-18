// Importa o framework Express (responsável por criar o servidor)
const express = require('express');

// Cria a aplicação principal
const app = express();

// Importa as rotas da aplicação (API do DataHub)
const routes = require('./routes');

// Módulo nativo para lidar com caminhos de arquivos
const path = require('path');


// Permite que a aplicação receba dados em formato JSON nas requisições
app.use(express.json());

// Define que todas as rotas da API começam a partir da raiz "/"
app.use('/', routes);


// Serve os arquivos estáticos (HTML, CSS, JS) da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));


// Define a porta onde o servidor irá rodar
const PORT = 3000;


// Inicia o servidor
app.listen(PORT, () => {
    console.log(`DataHub rodando em http://localhost:${PORT}`);
});