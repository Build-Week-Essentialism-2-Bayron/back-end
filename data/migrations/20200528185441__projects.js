exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments();
    tbl.string('project1').unique().notNullable();
    tbl.string('project2').notNullable();
    tbl.string('project3').notNullable();
    tbl.string('project4').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('values');
}; 