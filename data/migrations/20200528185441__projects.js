exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('projectname').unique().notNullable();
      tbl.string('projectdescription').notNullable();
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
  };