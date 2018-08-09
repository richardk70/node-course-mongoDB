const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// 3 methods for removing records or documents
// 1. Todo.remove({ })  Deletes ALL records. Returns nothing.
/*
Todo.remove({})
     .then( (res) => {
         console.log(res);
     });
*/

// 2. Todo.findOneAndRemove({}) - get the document back that was removed too
Todo.findOneAndRemove({_id:"5b6cb30bcd50e35f0e576475"}).then( (todo)=> {
    console.log(todo);
})
// 3. Todo.findByIdAndRemove({}) - find by ID and remove it, return it too
/*
const id = "5b6cad0bcd50e35f0e57639f";
Todo.findByIdAndRemove(id).then( (todo) => {
    console.log(todo);
});
*/