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

    // find one and update
    /*
    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5b6368235d906f866df07c40') },
        { $set: { completed: false } }, 
    {
        returnOriginal: false
    })
        .then( (res) => {
            console.log(res);
        })
    */

    db.collection('Users').findOneAndUpdate(
        { name: 'Amanda' }, 
        { $inc: { age: -2 }
    }, {
        returnOriginal: false
    })
    .then( (res) => {
        console.log(res);
    })

    // client.close();
});