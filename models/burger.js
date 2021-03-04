// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res)=>cb(res))
    },
    insertOne(tableInput, colInput, cb) {
        orm.insertOne('burgers', tableInput, colInput, (res) => cb(res))
    },
    updateOne(table, objColVals, id, cb) {
        orm.updateOne('burgers', table, objColVals, id, (res) => cb(res))
    },
    delete(condition, cb) {
        orm.delete('burgers', condition, (res) => cb(res));
      },
    
};

module.exports = burger;