
exports.up = function(knex) {
    return knex.schema.createTable('games', function(tbl) {
        tbl.increments();
        tbl
            .string('title', 50)
            .notNullable()
            .unique('uq_title');
        tbl
            .string('genre', 50);
        tbl
            .integer('releaseYear', 4);
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games');
};
