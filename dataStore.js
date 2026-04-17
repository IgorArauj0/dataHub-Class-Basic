// Simula um "hub" central de dados
const data = [];

function addData(source, payload) {
    const entry = {
        id: Date.now(),
        source,
        payload,
        createdAt: new Date()
    };

    data.push(entry);
    return entry;
}

function getAllData() {
    return data;
}

function getBySource(source) {
    return data.filter(item => item.source === source);
}

module.exports = {
    addData,
    getAllData,
    getBySource
};