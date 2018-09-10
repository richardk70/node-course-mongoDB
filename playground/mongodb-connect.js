<<<<<<< HEAD
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
=======
//const MongoClient = require('mongodb').MongoClient; // this line same as line below
const {MongoClient} = require('mongodb');

const {ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        console.error('Unable to connect to mongoDB server.');
    else 
        console.log('Connected to mongoDB server.');

    const db = client.db('TodoApp');

    /*
    db.collection('todos').insertOne( {
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err)
            console.log('Unable to insert todo', err);
        else
            console.log(JSON.stringify(result.ops, undefined, 2));
    });
    */

    /*
    // insert new document into Users (name, age, location)
    db.collection('Users').insertOne( {
        name: 'Richard',
        age: 48,
        location: 'Claremont'
    }, (err, result) => {
        if (err)
            console.log('Error: ' + err);
        else {
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

        }
    });
    */

    client.close();
});
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
