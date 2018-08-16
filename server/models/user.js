const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email.'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

// only send back crtain information
UserSchema.methods.toJSON = function(){
    var user = this;
    var userObj = user.toObject();
    return _.pick(userObj, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'secretValue').toString();

    // user.tokens = user.tokens.concat([{access, token}]);
    user.tokens.push({access, token});

    return user.save().then( ()=> {
        return token;
    });
};

UserSchema.statics.findByToken = function(token){
    var User = this;
    var decoded;
    
    try{
        decoded = jwt.verify(token, 'secretValue');
    } catch (e) {
        // handle errors in here
        return new Promise( (resolve, reject)=>{
            reject();
        });
    }

    return User.findOne({ 
        "_id": decoded._id,
        "tokens.token": token,
        "tokens.access": 'auth'
    });
};

var User = mongoose.model('User', UserSchema);

module.exports = { 
    User: User 
};