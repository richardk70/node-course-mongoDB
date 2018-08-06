// server.js file just responsible for our routes

const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

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

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // valid id using isValid
    if (!ObjectID.isValid(id))
        return res.status(404).send();

    Todo.findById(id).then ( (todo) => {
        // returns nothing
        if (!todo)
            return res.status(404).send();

        // success case
        res.send({todo});
    }).catch( (e) =>{
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000...');
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