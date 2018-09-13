var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  // require the JSON file
  var config = require('./config.json');
  var envConfig = config[env];

  console.log(Object.keys(envConfig));

  Object.keys(envConfig).forEach((key) => {
      process.env[key] = envConfig[key];
  });
}

// if (env === 'development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/Todo';
// } else if (env === 'test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoTest';
// }
