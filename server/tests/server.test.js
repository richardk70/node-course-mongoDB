const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [
    { 
        _id: new ObjectID(),
        text: 'First test todo'
    }, { 
        _id: new ObjectID(),
        text: 'Second test todo'
    }, { 
        _id: new ObjectID(),
        text: 'Third test todo!'
    }
];


beforeEach( (done)=> {
    Todo.remove({}).then( ()=> {
        return Todo.insertMany(todos);
    }).then( () => done() );

});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var text = 'Test todo text.';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect( (res) => {
                expect(res.body.text).toBe(text);
            })
            .end( (err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({text}).then( (todos) => {
                        expect(todos.length).toBe(1);
                        expect(todos[0].text).toBe(text);
                        done();
                    }).catch( (e) => done(e)) ;
            });
    });

    it('should NOT create a new todo', (done) => {

        request(app)
            .post('/todos')
            .send({}) // passing in invalid data
            .expect(400) // we are expecting it to fail
            .end( (err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find() // fetches every record in the Todo db
                .then( (todos) => {
                    expect(todos.length).toBe(3);
                    done();
                }).catch( (e) => done(e));
            });
    });
});

describe('GET /todos', () => {
    it('should get the test todos', (done) => {
        request(app).get('/todos')
            .expect(200)
            .expect( (res) => {
                expect(res.body.todos.length).toBe(3);
            })
            .end(done);
    });
});

describe('GET /todos:id', () => {
    it('should return "todo" doc', (done) => {
        request(app)
            .get('/todos/' + todos[0]._id.toHexString())
            .expect(200)
            .expect( (res) => {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
    });

    it('should return a "404" if todo _ID not found', (done) => {
        // make sure you get a 404 back
        var hexID = todos[0]._id.toHexString();
        request(app)
            .get('/todo/' + hexID)
            .expect(404) // expecting it to fail
            .end(done);
    });

    it('should return a "404" for non-object IDs', (done) => {
        // /todos/123
        request(app).get('/todos/123abc')
        .expect(404)
        .end(done)
    });
});
