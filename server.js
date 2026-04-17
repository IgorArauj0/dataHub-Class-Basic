const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.json());
app.use('/', routes);

// Servir frontend
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`DataHub rodando em http://localhost:${PORT}`);
});