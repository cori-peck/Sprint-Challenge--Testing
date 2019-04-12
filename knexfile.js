// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/gamesDb.sqlite3'
    },
    useNullAsDefault: true
  }
}

