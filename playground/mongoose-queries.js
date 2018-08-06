const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5b68c8d237c3124c6ca22fe5";
var userID = '5b64bf1e0c29bd392ca2fd47';

User.findById(userID).then( (data) => {
    if (!data)
        return console.log('User not found.');

    console.log('Found (by ID): ', data);
}).catch( (e) => console.log(e));

/*
if (!ObjectID.isValid(id)){
    console.log('ID not valid.');
}

Todo.find({
    _id: id
}).then( (todos)=> {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id
}).then( (todo) => {
    console.log('First todo: ', todo);
});

Todo.findById(id).then( (todo)=> {
    if (!todo)
        return console.log('ID not found.');
    console.log('Find by ID: ', todo);
}).catch( (e) => console.log(e));
*/