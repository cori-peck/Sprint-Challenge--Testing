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
    })

    describe('POST /games', () => {
        it('should return 201 when a new game is added', async () => {
            const game = {
                title: 'Centipede', genre: "Shoot 'em up", releaseYear: "1980"
            }

            const status = await request(server).post('/games')
                .send(game)
                .set('Accept', 'application/json')
                .expect(201)
        })
    })
})