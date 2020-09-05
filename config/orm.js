var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function (table, burgerName, cb) {
    var queryString = `INSERT INTO ${table} (burger_name, devoured) values (?, false)`;
    console.log(queryString);
    connection.query(queryString, burgerName, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: function (table, burgerId, cb) {
    var queryString = `UPDATE ${table} set devoured=true where id=?`;
    console.log(queryString);
    connection.query(queryString, burgerId, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },  
};

// Export the orm object for the model.
module.exports = orm;
