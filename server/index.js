const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Adicione esta linha

app.get('/produtos', async (req, res) => {
    try {
        const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao buscar produtos');
    }
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
