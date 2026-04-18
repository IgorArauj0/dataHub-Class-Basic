// Simula um "hub" central de dados (armazenamento em memória)
const data = [];

// Função para adicionar novos dados ao DataHub
function addData(source, payload) {
    const entry = {
        id: Date.now(), // gera um ID único baseado no tempo
        source, // origem do dado (ex: app_mobile, site, etc)
        payload, // conteúdo do dado enviado
        createdAt: new Date() // data/hora de criação
    };

    data.push(entry); // salva o dado no "hub"
    return entry; // retorna o dado inserido
}

// Função para retornar TODOS os dados armazenados
function getAllData() {
    return data;
}

// Função para filtrar dados por origem (source)
function getBySource(source) {
    return data.filter(item => item.source === source);
}

// Exporta as funções para serem usadas em outros arquivos
module.exports = {
    addData,
    getAllData,
    getBySource
};