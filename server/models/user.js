const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
<<<<<<< HEAD
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      isAsync: false,
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
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

UserSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens = user.tokens.concat([{access, token}]);

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function(token) {
  var User = this; // (this is a model method)
  var decoded = undefined;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    return Promise.reject();
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function(email, password) {
  var User = this;

  return User.findOne({
    email: email
  }).then( (user) => {
    if (!user){
      return Promise.reject();
    }
    // user does exist
    return new Promise( (resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (err)
          reject();
      
        resolve(user);
      });
    });
  });
};

UserSchema.pre('save', function(next) {
  var user = this;
  // check if password was modified
  if (user.isModified('password')) { // if returns true
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    }) 
  } else {
    next();
  }
});

UserSchema.methods.removeToken = function(token) {
  var user = this;
  return user.update({
    $pull: {
      tokens: { token }
    }
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {User}
=======
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

UserSchema.pre('save', function(next){
    var user = this;

    if (user.isModified('password')){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            });
        });

    } else {
        next();
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = { 
    User: User 
};
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
