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