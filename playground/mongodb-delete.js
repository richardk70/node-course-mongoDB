<<<<<<< HEAD
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("57ac8d47878a299e5dc21bc8")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
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
    // deleteOne
    db.collection('Todos').deleteOne({
        text: 'Something to do'
    });
    */

    /*
    // deleteMany
    db.collection('Todos').deleteMany({
        completed: true
    })
        .then( (result) => {
            console.log(result);
        });
    */

    /*
    // findOneandDelete is best cuz it returns the one that it deletes
    db.collection('Todos').findOneAndDelete({
        completed: false
    }).then ( (result) => {
        console.log(result);
    });
    */

    // delete dupes
    /*
    db.collection('Users').deleteMany({
        name: 'Richard'
    }).then ( (result) => {
        console.log(result);
    })
    */

    // findOneandDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b6388725d906f866df0802b')
    }).then ( (result) => {
        console.log(result);
    });

    // client.close();
});
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
