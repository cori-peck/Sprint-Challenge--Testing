
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games')
    .truncate()
    .then(function () {
      return knex('games').insert([
        {id: 1, title: 'Pacman', genre: 'Arcade', releaseYear: 1980 },
        {id: 2, title: 'Donkey Kong', genre: 'Platform game', releaseYear: 1981 },
        {id: 3, title: 'Mario Bros', genre: 'Platform game', releaseYear: 1983 };
      ])
    })
}
