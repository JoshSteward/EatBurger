// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res)=>cb(res))
    },
    insertOne(tableInput, colInput, burger_name, cb) {
        orm.insertOne('burgers', tableInput, colInput, burger_name, (res) => cb(res))
    },
    updateOne(table, objColVals, updatedBurger, id, cb) {
        orm.updateOne('burgers', table, objColVals, updatedBurger, id, (res) => cb(res))
    },
};

module.exports = burger;