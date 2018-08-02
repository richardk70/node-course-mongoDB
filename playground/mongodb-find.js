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
    db.collection('todos').find({ 
        completed: true,        // returns all completed items
        //_id: new ObjectID("5b633f204f0d4033b008ccdf") // returns specific todo

    }).toArray()
        .then( (docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
    */

    /*
    // count the number of todos
    db.collection('todos').find().count().then( (count) => {
        console.log('Todos count:' + count);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    */

    db.collection('Users').find({
        name: 'Richard'
    }).count()
    .then( (count) => {
        console.log('Count of Richards: ' + count);
    }, (err) => {
        console.log('Error: ' + err);
    })

    //client.close();
});