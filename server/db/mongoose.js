const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // will work with promises now

mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
};