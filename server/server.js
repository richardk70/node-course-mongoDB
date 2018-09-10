<<<<<<< HEAD
require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
=======
// server.js file responsible for our routes

require('./config/config.js');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

<<<<<<< HEAD
=======
var {ObjectID} = require('mongodb');

var obj = new ObjectID();

>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
<<<<<<< HEAD
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  User.findByCredentials(body.email, body.password)
    .then((user) => {
      return user.generateAuthToken().then( (token) => {
        res.header('x-auth', token).send(user)
      });
    }).catch( (e) => {
      res.status(400).send();
    });
});
// POST /users/login {email, password}
// use pick
// res.send(body);

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then( () => {
    res.status(200).send();
  }, () =>{
    res.status(400).send();
  })
});

app.listen(port, () => {
  console.log(`Started up at port ${port}...`);
});

module.exports = {app};
=======
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then( (doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/', (req, res) => {
    res.send(`server/server.js running on port ${port}...`);
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // valid id using isValid
    if (!ObjectID.isValid(id)){
        console.log('ID not valid.');
        return res.status(404).send();
    }

    Todo.findById(id).then ( (todo) => {
        // returns nothing
        if (!todo){
            console.log('Returns nothing.');
            return res.status(404).send();
        }

        // success case
        res.send({todo});

    }).catch( (e) =>{
        res.status(400).send();
    });
});

app.delete('/todos/:id', (req, res) => {
    // get the ID from the URL
    var id = req.params.id;
    // validate the ID. if not valid, return 404
    if (!ObjectID.isValid(id)){
        console.log('ID not valid.');
        return res.status(404).send();
    }
    // remove todo by ID (err, success)
    Todo.findByIdAndRemove(id).then( (todo)=> {
        if (!todo)
        return res.status(404).send();
        // success: send document back with code 200
        res.status(200).send({todo});
    }).catch( (e) => {
        // error: return 400 w/ empty body send();
        res.status(400).send();
    });
});

// UPDATE route.
// uses the http patch method
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
        .then((todo) => {
            if (!todo)
                res.status(404).send();

            res.send({todo});
        }).catch( (e) => {
            res.status(400).send();
        });
});

// POST /users.
app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User({
        email: body.email,
        password: body.password
    });
    user.save().then( () => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header( 'x-auth', token ).send(user);
    }).catch((err) => {
        res.status(400).send(err);
    });
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

// listen
app.listen(port, () => {
    console.log(`Started on port ${port}...`);
});

module.exports = {
    app: app
};

// get ALL todos!
app.get('/todos', (req, res) => {
    Todo.find().then( (todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});
>>>>>>> f9110a32d3ae039382eb28ff4816734b1d3825b4
