const express = require('express');
const router = express.Router();
const dataStore = require('./dataStore');
const externalService = require('./externalService');


// 🔹 Health check
router.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});


// 🔹 Inserir dados
router.post('/data', (req, res) => {
    const { source, payload } = req.body;

    if (!source || !payload) {
        return res.status(400).json({
            error: 'source e payload são obrigatórios'
        });
    }

    const result = dataStore.addData(source, payload);
    res.json(result);
});


// 🔹 Buscar todos
router.get('/data', (req, res) => {
    res.json(dataStore.getAllData());
});


// 🔹 Buscar por origem
router.get('/data/:source', (req, res) => {
    const source = req.params.source;
    res.json(dataStore.getBySource(source));
});


// 🔹 Importar dados externos
router.get('/import/users', async (req, res) => {
    try {
        const users = await externalService.fetchUsers();

        users.forEach(user => {
            dataStore.addData('imported_api', user);
        });

        res.json({
            message: 'Usuários importados com sucesso',
            total: users.length
        });

    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar API externa'
        });
    }
});


// 🔹 Limpar dados (útil em aula)
router.delete('/data', (req, res) => {
    if (dataStore.clear) {
        dataStore.clear();
    }

    res.json({ message: 'Dados limpos' });
});


module.exports = router;