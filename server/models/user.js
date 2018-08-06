var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    homeCity: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = { 
    User: User 
};