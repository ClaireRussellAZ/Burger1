// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  insertOne: function (burgerName, callback) {
    // INSERT INTO burgers (burger_name) VALUES ("Levi Bird");
    var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";
    connection.query(s, [burgerName], function (err, result) {

      callback(result);

    });
  },
  updateOne: function (burgerId, callback) { 
    var s = "UPDATE " + tableName + "SET devoured=true WHERE id=?";

    connection.query(s, [burgerId], function (err, result) {

      callback(result);

    });
  },
  selectAll: function (callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function (err, result) {

      callback(result);

    });

  },



  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  // getTodos: function (callback) {
  //   var s = "SELECT * FROM " + tableName;

  //   connection.query(s, function (err, result) {

  //     callback(result);

  //   });
  // },

  // // Here our ORM is creating a simple method for performing a query of a single character in the table.
  // // Again, we make use of the callback to grab a specific character from the database.

  // deleteTodo: function (id, callback) {

  //   var s = "DELETE FROM " + tableName + " WHERE id=?";

  //   connection.query(s, [id], function (err, result) {

  //     callback(result);
  //   });

  // },

  // addTodo: function (todo, callback) {
  //   var s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
  //   todo.complete = todo.complete || 0;
  //   connection.query(s, [
  //     todo.text, todo.complete
  //   ], function (err, result) {

  //     callback(result);

  //   });
  // },

  // editTodo: function (todo, callback) {
  //   var s = "UPDATE " + tableName + " SET text=? WHERE id=?";

  //   connection.query(s, [
  //     todo.text, todo.id
  //   ], function (err, result) {

  //     callback(result);

  //   });
  // }

};

module.exports = orm;
