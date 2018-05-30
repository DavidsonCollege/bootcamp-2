const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const faker = require("faker");
const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost/todoApp';

// Database Name
const dbName = 'todoApp';

// Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//   // Get the documents collection
//   const collection = db.collection('todos');
// Insert some documents
/*for(let i=0; i<20000; i++){
    var randomDescription = faker.lorem.words();
      var randomCompletedOn = faker.date.future();
      var randomCreatedOn = faker.date.past();
      collection.insert({description: randomDescription, completedOn: randomCompletedOn, createdOn: randomCreatedOn});
}*/

mongoose.connect(url);
var db = mongoose.connection;

var TodoSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            maxlength: 100
        },
        completedOn: {
            type: Date
        },
        createdOn: {
            type: Date
        }
    },
    {collection: 'todos'}
);
var UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            maxlength: 100
        },
        lastName: {
            type: String,
            maxlength: 100
        },
        userName: {
            type: String,
            maxlength: 100
        },
        email: {
            type: String,
            maxlength: 100
        }
    },
    {collection: 'users'}
);
var Todos = mongoose.model('Todos', TodoSchema);
var Users = mongoose.model('Users', UserSchema);

db.once('open', function () {
    /*for(let i=0; i<20000; i++){
        var randomDescription = faker.lorem.words();
          var randomCompletedOn = faker.date.future();
          var randomCreatedOn = faker.date.past();
          const newTodo = new Todos({description:randomDescription, completedOn: randomCompletedOn, createdOn: randomCreatedOn});
          newTodo.save().then(() => console.log("WORKED!\n"));
    }*/
    for (let i = 0; i < 2; i++) {
        var randomFirstName = faker.name.firstName();
        ;
        var randomLastName = faker.name.lastName();
        var randomUserName = faker.name.findName();
        var randomEmail = faker.internet.email();
        const newUser = new Users({
            firstName: randomFirstName,
            lastName: randomLastName,
            userName: randomUserName,
            email: randomEmail
        });
        newUser.save().then(() => console.log("WORKED!\n"));
    }
});

// client.close();
// });
