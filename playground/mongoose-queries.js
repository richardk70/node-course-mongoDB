const {ObjectID} = require('mongodb');
<<<<<<< HEAD

=======
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

<<<<<<< HEAD
// var id = '57bf38394b39c93d2a557e9811';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('57bdb0fcdedf88540bfa2d66').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
=======
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
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
