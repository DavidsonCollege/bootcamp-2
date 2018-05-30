var MongoClient= require('mongodb').MongoClient
var faker = require('faker');

MongoClient.connect("mongodb://localhost:27017/todo", function(err,db){


  if (err) throw err;
var tododb = db.db("todo")
for (let i =0; i<100 ; i++){
var randomFirst = faker.name.firstName(); // Rowan Nikolaus

var randomLast = faker.name.lastName(); // Nikolaus

var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomUser = randomFirst +randomLast; // random contact card containing many properties

var fakeobj = ({firstName: randomFirst, lastName: randomLast, userName: ramdomUser, email: randomEmail})
tododb.collection("users").insertOne(fakeobj), function (err,res){
  if (err) throw err
db.close()
}
}}

for (let i =0; i<20000 ; i++){
  var randomTask = faker.verb()
  var randomComplete = faker.date()
  var randomCreate = faker.date()

  var faketodo = ({description: randomTask, dateCompleted: randomComplete, dateCreated: ramdomCreate})
  tododb.collection("todo").insertOne(faketodo), function (err,res){
    if (err) throw err
  db.close()
}
)
