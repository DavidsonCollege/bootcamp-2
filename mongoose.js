const url = 'mongodb://localhost/toDoApp';
const assert = require('assert');
const mongoose = require('mongoose');
var faker = require('faker');
var connection = mongoose.createConnection(url);


var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    maxLength: 100
  },
  lastName: {
    type: String,
    maxLength: 100
  },
  userName:{
    type: String,
    maxLength: 100
  },
  email:{
    type: String,
    maxLength: 100
  }
});

var toDoSchema = new mongoose.Schema({
  description:{
    type: String,
    maxLength: 100,
  },
  completedOn:{
    type: Date,
  },
  createdOn:{
    type: Date,
  }
});

var usr = connection.model("users", userSchema);
var toDo = connection.model("todos", userSchema);


var createUsers = function(){
  var arr = [];
  for (i = 0; i < 100; i++){
    let obj = new usr;
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
    let obj = new toDo;
    obj.description = faker.lorem.sentence();
    obj.completedOn = faker.date.past();
    obj.createdOn = faker.date.past();
      //faker.fake("firstName: {{name.firstName}}, lastName: {{name.lastName}}, userName: {{internet.userName}}, email: {{internet.email}}");
     arr.push(obj);
     //console.log(obj);
  }
  return arr;
}

const insertDocuments = function(model, coll, func) {
  //db.collection(coll).insertMany(createUsers());
  model.insertMany(func());
}

//insertDocuments(usr, "users", createUsers);
//insertDocuments(toDo, "todos", createToDos);
let o = new usr;
o.firstName = "kfbdsvlksadnfafsbjlaefjlvsdjlvjsdbjasdbvjabbjladbjlvbsdjlvbsdjbjsdbvjlsdbvjsbajvbjldsnvjabjvbsdjabvdsjbvjsdbvjsjbvlj";
o.lastName = "sa";
o.userName = "2";
o.email = 3;
usr.create(o);

console.log("hey");
