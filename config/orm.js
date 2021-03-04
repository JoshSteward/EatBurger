// Import MySQL connection.
const connection = require('./connection.js');

/*
// Helper function for SQL syntax to add question marks (?, ?, ?) in query
const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
  const arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
};
*/

const orm = {
    //where cb is the function being passed 
    selectAll(tableInput,cb){
        const queryString = 'SELECT * FROM ??;'
        connection.query(queryString, [tableInput], (err,res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne(tableInput, colInput, burger_name, cb) {
        const queryString = 'INSERT INTO ??(??) VALUES (?)';
        connection.query(queryString, [tableInput, colInput, burger_name], (err,res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne(table, objColVals, updatedBurger, id, cb){
        const queryString = 'UPDATE ?? SET ?? = ? WHERE id = ?';
        connection.query(queryString, [table, objColVals, updatedBurger, id], (err,res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// Export the orm object for the model
module.exports = orm;

