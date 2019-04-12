const db = require('../data/dbConfig.js');
const Games = require('./gamesModel.js');


describe('games model', () => {
    describe('insert()', () => {
        afterEach(async () => {
            await db('games').truncate();
        })

        it('should add new games into database', async () => {
            await Games.insert({ title: 'Galaga', genre: "Shoot 'em up", releaseYear: 1981 })
            await Games.insert({ title: 'Pong', genre: 'Sports game', releaseYear: 1972 })

            const games = await db('games')
            expect(games).toHaveLength(3);
        })
    })

    it('should return an empty array if no games in db', async () => {
        const games = await Games.getAll();

        expect(games).toHaveLength(0);
    })
})