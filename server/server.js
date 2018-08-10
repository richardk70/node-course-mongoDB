// server.js file responsible for our routes

require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then( (doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/', (req, res) => {
    res.send(`server/server.js running on port ${port}...`);
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // valid id using isValid
    if (!ObjectID.isValid(id)){
        console.log('ID not valid.');
        return res.status(404).send();
    }

    Todo.findById(id).then ( (todo) => {
        // returns nothing
        if (!todo){
            console.log('Returns nothing.');
            return res.status(404).send();
        }

        // success case
        res.send({todo});

    }).catch( (e) =>{
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    // get the ID from the URL
    var id = req.params.id;
    // validate the ID. if not valid, return 404
    if (!ObjectID.isValid(id)){
        console.log('ID not valid.');
        return res.status(404).send();
    }
    // remove todo by ID (err, success)
    Todo.findByIdAndRemove(id).then( (todo)=> {
        if (!todo)
        return res.status(404).send();
        // success: send document back with code 200
        res.status(200).send({todo});
    }).catch( (e) => {
        // error: return 400 w/ empty body send();
        res.status(400).send();
    });
});

// UPDATE route.
// uses the http patch method
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then((todo) => {
            if (!todo)
                res.status(404).send();

            res.send({todo});
        }).catch( (e) => {
            res.status(400).send();
        });
});

// listen
app.listen(port, () => {
    console.log(`Started on port ${port}...`);
});

module.exports = {
    app: app
};

// get ALL todos!
app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});