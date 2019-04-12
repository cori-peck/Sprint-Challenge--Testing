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

server.post('/games', async (req, res) => {
    const game = req.body
    if (!game.title) {
        res.status(422).json({ message: "A game title is required" })
    } else {
        const create = await games.insert(game)
        res.status(201).json(create)
    }
})



module.exports = server;