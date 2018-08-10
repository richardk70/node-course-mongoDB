const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // will work with promises now

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = {
    mongoose: mongoose
};
