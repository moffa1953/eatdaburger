// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

    var burgers = {
          all: function(cb) {
            orm.all("burgers", function(res) {
              console.log(res)
              cb(res);
            });
          },

          // The variables cols and vals are arrays.
          create: function(cols, vals, cb) {
            console.log("bjscreate")
            orm.create("burgers", cols, vals, function(res) {
              console.log(res)
              cb(res);
            });
          },

          updateOne: function(id, callback){
            orm.updateOne(id, function(res){
              callback(res);
            });
          }
    };

module.exports = burgers;
