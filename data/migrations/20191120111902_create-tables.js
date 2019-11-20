
exports.up = function (knex) {
  return knex.schema.createTable('zoos', tbl => {
    tbl.increments();
    tbl.string('zoo_name', 128).notNullable();
    tbl.string('address', 128).notNullable().unique();
  })
    .createTable('species', tbl => {
      tbl.increments();
      tbl.string('species_name', 128).notNullable().unique();
    })
    .createTable('animals', tbl => {
      tbl.increments();
      tbl.string('animal_name', 128).notNullable();
      tbl.integer('species_id')
        // unsigned means not negative id
        .unsigned()
        .notNullable()
        .references('id')
        // must have inTable or else it would crash
        .inTable('species')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('zoo_animals', tbl => {
      tbl.integer('zoo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('zoos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('animal_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('animals')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.primary(['zoo_id', 'animal_id'])
    })
};

exports.down = function (knex) {
  // reverse order of creation
  return knex.schema
  dropTableIfExists('zoo_animals')
  dropTableIfExists('animals')
  dropTableIfExists('species')
  dropTableIfExists('zoos')
};
