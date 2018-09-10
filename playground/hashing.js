const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

<<<<<<< HEAD
var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hash: ', hash);
  });
});

var hashedPass = '$2a$10$nWHdofDfnFGpgk3DLVm5I.IycumBqesYojRpU0DZMRW0o5J4gI8Pu';

bcrypt.compare(password, hashedPass, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 9
// };

// var token = jwt.sign(data, '123abc');
// console.log('token: ', token);

// var decoed = jwt.verify(token, '123abc');
// console.log('decoded: ', decoed);

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
=======
var password = '213abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$kXthTfsMtWKudQBJ9xyTzOBxAFivdJB3usnNpboLxPfUX0aTqTo5O';

bcrypt.compare('123abc!', hashedPassword, (err, res) => {
    console.log(res);
});

/*
var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log('token returned: ', token);
var decoded = jwt.verify(token, '123abc');
console.log('decoded: ', decoded);



var message = ' I am user number one, baby!';

var hash = SHA256(message);

console.log('Message: ' + message);
console.log('Hashed message: ', hash);

var data = {
    id: 4
};

var token = {
    data: data,
    hash: SHA256(JSON.stringify(data) + 'asecret').toString()
}

// if a user tries to cheat the ssystem
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'asecret').toString();

if (resultHash === token.hash){
    console.log('Data was not changed.');
} else {
    console.log('Data was changed. Do not trust!');
}
*/
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
