const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

function insert(toon) {
  return (
    db("toons")
      .insert(toon, "id")
      // .then(([id]) => {
      .then(ids => {
        const id = ids[0];
        // const [id] = ids;
        return db("toons")
          .where({ id })
          .first();
      })
  );
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("toons");
}

function findById(id) {
  return null;
}
