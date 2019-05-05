var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genres');
Book = require('./models/books');

//connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection; //database object

app.get('/', function(req, res) {
    res.send('Hello world people');
});

app.get('/api/genres', function (req, res) {
    Genre.getGenres(function (err, genres) {
        if (err){
          throw err;
        }
        res.json(genres);
    });
});

app.post('/api/genres', function (req, res) {
    var genre = req.body; //save everything in form into genre object
    Genre.addGenre(genre, function (err, genre) {
        if (err){
            throw err;
        }
        res.json(genre);
    });
});

app.put('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    var genre = req.body; //save everything in form into genre object
    Genre.updateGenre(id, genre, {},function (err, genre) {
        if (err){
            throw err;
        }
        res.json(genre);
    });
});

app.delete('/api/genres/:_id', function (req, res) {
    var id = req.params._id;
    Genre.deleteGenre(id,function (err, genre) {
        if (err){
            throw err;
        }
        res.json(genre);
    });
});

app.get('/api/books', function (req, res) {
    Book.getBooks(function (err, books) {
        if (err){
            throw err;
        }
        res.json(books);
    });
});

app.get('/api/books/:_id', function (req, res) {//:id means what ever id passed into it
    Book.getBookById(req.params._id,function (err, book) {
        if (err){
            throw err;
        }
        res.json(book);
    });
});

app.post('/api/books', function (req, res) {
    var book = req.body; //save everything in form into genre object
    Book.addBook(book, function (err, book) {
        if (err){
            throw err;
        }
        res.json(book);
    });
});

app.put('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    var book = req.body; //save everything in form into genre object
    Book.updateBook(id, book, {},function (err, book) {
        if (err){
            throw err;
        }
        res.json(book);
    });
});

app.delete('/api/books/:_id', function (req, res) {
    var id = req.params._id;
    Book.deleteBook(id,function (err, book) {
        if (err){
            throw err;
        }
        res.json(book);
    });
});

app.listen(3000);
console.log('Running on port 3000...');
