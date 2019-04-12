const express = require('express');
const games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());



server.get('/', async (req, res) => {
    res.status(200).json({ api: 'connection up' })
})

server.get('/games', async (req, res) => {
    const list = await games.getAll();

    res.status(200).json(list)
})



module.exports = server;