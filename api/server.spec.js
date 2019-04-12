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

        it('should return JSON', async () => {
            const result = await request(server).get('/games')

                expect(result.type).toBe('application/json')
        })
    })



    describe('POST /games', () => {
        it('should return 201 when a new game is added', async () => {
            const game = {
                title: 'Centipede', genre: "Shoot 'em up", releaseYear: "1980"
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
    })
})