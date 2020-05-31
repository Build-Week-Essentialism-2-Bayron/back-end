const db = require('../data/dbConfig.js');
const bcrypt = require('bcryptjs');

function insert(project) {
  return db('projects')
    .insert(project, 'id')
    .then(([id]) => id);
};

function findBy(where) {
  return db('projects').where(where);
};

function findByProjectname(Projectname) {
  return findBy({ Projectname }).first();
};

function find() {
  return db('projects');
};


function add(project) {
  user.password = bcrypt.hash(user.password, 14)
  const [id] = db('projects').insert(project)

  return findById(id)
};

function findById(id) {
  return db('projects').where({ id }).first('id')
};


function update(id, changes) {
  return db('projects')
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
};

function remove(id) {
  return db('projects')
    .where({ id })
    .del()
};

module.exports = {
  insert,
  findBy,
  findByProjectname,
  find,
  findById,
  add,
  update,
  remove 
};
