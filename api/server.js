const express = require('express');
const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());



server.get('/', async (req, res) => {
    res.status(200).json({ api: 'connection up' })
})

server.get('/games', async (req, res) => {
    try {
        const list = await Games.getAll();
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ message: "Problem retrieving list of games." })
    }
})

server.post('/games', async (req, res) => {
    try {
        const game = req.body
        if (!game.title) {
            res.status(422).json({ message: "A game title is required" })
        } else {
            const create = await Games.insert(game)
            res.status(201).json(create)
        }
    } catch (error) {
        res.status(500).json({ message: "Problem adding game to list" })
    }
})



module.exports = server;