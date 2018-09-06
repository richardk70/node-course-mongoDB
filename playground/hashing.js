const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

var data = {
  id: 9
};

var token = jwt.sign(data, '123abc');
console.log('token: ', token);

var decoed = jwt.verify(token, '123abc');
console.log('decoded: ', decoed);

// var password = '123abc';

// var message = "I am user number 8.";

// var hashed = SHA256(message).toString();

// console.log(message);
// console.log(hashed);


// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash){
//   console.log('Data was not changed.');
// } else {
//   console.log('Data was changed. DO NOT USE.');
// }