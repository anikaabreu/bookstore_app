var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genres')
Book = require('./models/books')
    //connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;

//routes

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/api/genres', function(req, res) {
    Genre.getGenres(function(err, genres) {
        if (err) {
            throw err;
        }
        res.json(genres);
    })

}, )

app.post('/api/genres', function(req, res) {
    var genre = req.body;

    Genre.addGenre(genre, function(err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    })

}, )

app.putt('/api/genres/:id', function(req, res) {
    var id = request.params._id
    var genre = req.body;

    Genre.updateGenre(id, genre, {}, function(err, genre) {
        if (err) {
            throw err;
        }
        res.json(genre);
    })

}, )



app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books) {
        if (err) {
            throw err;
        }
        res.json(books);
    })

}, )


app.get('/api/books/:_id', function(req, res) {
    Book.getBookById(req.params._id, function(err, id) {
        if (err) {
            throw err;
        }
        res.json(id);
    })

}, )

app.post('/api/books', function(req, res) {
    var book = req.body;

    Book.addBook(book, function(err, book) {
        if (err) {
            throw err;
        }
        res.json(book);
    })

}, )

app.listen(3000);

console.log('app listening on port 3000');