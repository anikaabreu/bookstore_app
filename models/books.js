var mongoose = require('mongoose');

// genre schema

var bookSchema = mongoose.Schema({
    title: {
        type: String, //has to be caps
        required: true //validation
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    genre: {
        type: String, //has to be caps
        required: true //validation
    },
    description: {
        type: String, //has to be caps
    },
    author: {
        type: String, //has to be caps
    },
    publisher: {
        type: String, //has to be caps
    },
    pages: {
        type: String, //has to be caps
    },
    image_url: {
        type: String, //has to be caps
    },
    buy_url: {
        type: String, //has to be caps
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//get books

module.exports.getBooks = function(callback, limit) {
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id, callback) {
    Book.findById(id, callback);
}

// add a book
//takes book object which is data from the form
module.exports.addBook = function(book, callback) {
    Book.create(book, callback);
}