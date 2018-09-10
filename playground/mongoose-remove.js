const {ObjectID} = require('mongodb');
<<<<<<< HEAD

=======
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

<<<<<<< HEAD
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '57c4610dbb35fcbf6fda1154'}).then((todo) => {
  //   console.log(todo);
// });

// Todo.findByIdAndRemove('57c4610dbb35fcbf6fda1154').then((todo) => {
//   console.log(todo);
// });

// Todo.remove({completed: true}).then( (res) => {
//   console.log(res);
// });

Todo.findByIdAndRemove('5b9015eff719942b50bb06d6').then( (todo) => {
  console.log(todo);
});
=======
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
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
