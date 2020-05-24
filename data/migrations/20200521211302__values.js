exports.up = function(knex) {
    return knex.schema.createTable('values', tbl => {
      tbl.increments();
      tbl.string('valueName').unique().notNullable();
     });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('values');
  }; 