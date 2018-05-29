const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var faker = require('faker');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = "toDoApp";
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  insertDocuments(db, "users", createUsers);
  insertDocuments(db, "todos", createToDos);
  client.close();
});

var createUsers = function(){
  var arr = [];
  for (i = 0; i < 100; i++){
    let obj = {};
    obj.firstName = faker.name.firstName();
    obj.lastName = faker.name.lastName();
    obj.userName = faker.internet.userName();
    obj.email = faker.internet.email();
      //faker.fake("firstName: {{name.firstName}}, lastName: {{name.lastName}}, userName: {{internet.userName}}, email: {{internet.email}}");
     arr.push(obj);
  }
  return arr;
}

var createToDos = function(){
  var arr = [];
  for (i = 0; i < 20000; i++){
    let obj = {};
    obj.description = faker.lorem.sentence();
    obj.completedOn = faker.date.past();
    obj.createdOn = faker.date.past();
      //faker.fake("firstName: {{name.firstName}}, lastName: {{name.lastName}}, userName: {{internet.userName}}, email: {{internet.email}}");
     arr.push(obj);
  }
  return arr;
}

const insertDocuments = function(db, coll, func) {
  //db.collection(coll).insertMany(createUsers());
  db.collection(coll).insertMany(func());
}
