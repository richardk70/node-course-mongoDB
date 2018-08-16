const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log('token returned: ', token);
var decoded = jwt.verify(token, '123abc');
console.log('decoded: ', decoded);


/*
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