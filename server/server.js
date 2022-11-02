const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/music', async (req, res) => {
    const { data } = await axios.get('https://itunes.apple.com/search?term=nujabes&media=music&limit=10');
    res.json(data);
})

app.listen(3001, () => console.log('listening on port 3001'));