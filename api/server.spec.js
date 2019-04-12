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
})