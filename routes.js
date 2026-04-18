// Importa o framework Express
const express = require('express');

// Cria um "roteador" para organizar as rotas da aplicação
const router = express.Router();

// Importa o módulo responsável por armazenar os dados (DataHub)
const dataStore = require('./dataStore');


// Rota para INSERIR dados no DataHub
router.post('/data', (req, res) => {
    const { source, payload } = req.body; // pega os dados enviados no corpo da requisição

    // Validação simples: verifica se os campos foram enviados
    if (!source || !payload) {
        return res.status(400).json({ error: 'source e payload são obrigatórios' });
    }

    // Adiciona os dados no DataHub
    const result = dataStore.addData(source, payload);

    // Retorna o dado inserido como resposta
    res.json(result);
});


// Rota para BUSCAR todos os dados do DataHub
router.get('/data', (req, res) => {
    res.json(dataStore.getAllData());
});


// Rota para BUSCAR dados filtrando pela origem (source)
router.get('/data/:source', (req, res) => {
    const source = req.params.source; // pega o parâmetro da URL

    // Retorna apenas os dados daquela origem
    res.json(dataStore.getBySource(source));
});


// Exporta as rotas para serem usadas no servidor principal
module.exports = router;