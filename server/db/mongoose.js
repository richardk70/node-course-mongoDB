<<<<<<< HEAD
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });

module.exports = { mongoose };
=======
const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // will work with promises now

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    mongoose: mongoose
};
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
