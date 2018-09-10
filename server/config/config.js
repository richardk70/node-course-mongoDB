<<<<<<< HEAD
var env = process.env.NODE_ENV || 'development';

console.log('env: ', env);

if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/Todo';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoTest';
}
=======
const env = process.env.NODE_ENV || 'development';
console.log('environment: ', env);

if (env == 'development') {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env == 'test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
