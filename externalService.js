// Responsável por buscar dados de APIs externas
const axios = require('axios');

async function fetchUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

module.exports = {
    fetchUsers
};