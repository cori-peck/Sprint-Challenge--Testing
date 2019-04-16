const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig');

describe('server.js', () => {
    describe('GET /', () => {
        it('should return an OK status code form the / route', () => {
            return request(server)
            .get('/')
            .then(response => {
            
                expect(response.status).toBe(200);
            })

        })

        it('should return an ok status code from the /games route', () => {
            return request(server)
            .get('/games')
            .then(response => {

                expect(response.status).toBe(200);
            })
        })

        it('should return JSON', async () => {
            const result = await request(server).get('/games')

                expect(result.type).toBe('application/json')
        })
    })



    describe('POST /games', () => {
        it('should return 201 when a new game is added', async () => {
            const game = {
                title: 'Space Invaders', genre: "Shoot 'em up", releaseYear: "1980"
            }

            const result = await request(server).post('/games')
                .send(game)
                .set('Accept', 'application/json')
                
                expect(result.status).toBe(201);
        })

        it('should return 422 with incomplete info', async () => {
            const result = await request(server).post('/games')
                .send({ genre: "Arcade", releaseYear: 1980 })

                expect(result.status).toBe(422);
        })

        it('should return info from newly added game', async () => {
            const result = await request(server).post('/games')
                .send({ title: "Dig Dug", genre: "Maze", releaseYear: 1982 })

                expect(result.body).toHaveProperty('title')
                expect(result.body).toHaveProperty('genre')
                expect(result.body).toHaveProperty('releaseYear')
        })
    })
})