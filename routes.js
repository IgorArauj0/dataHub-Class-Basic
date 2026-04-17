const express = require('express');
const router = express.Router();
const dataStore = require('./dataStore');

// Inserir dados no DataHub
router.post('/data', (req, res) => {
    const { source, payload } = req.body;

    if (!source || !payload) {
        return res.status(400).json({ error: 'source e payload são obrigatórios' });
    }

    const result = dataStore.addData(source, payload);
    res.json(result);
});

// Buscar tudo
router.get('/data', (req, res) => {
    res.json(dataStore.getAllData());
});

// Buscar por origem
router.get('/data/:source', (req, res) => {
    const source = req.params.source;
    res.json(dataStore.getBySource(source));
});

module.exports = router;