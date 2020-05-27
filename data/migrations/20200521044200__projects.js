
exports.up = function(knex) {
    
    return knex.schema.createTable('projects', tbl => {
      tbl.increments("id");
      tbl.string('projectname').unique().notNullable();
    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects');
  };








// exports.up = function(knex) {
  
// };

// exports.down = function(knex) {
  
// };
