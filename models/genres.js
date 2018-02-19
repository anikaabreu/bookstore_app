var mongoose = require('mongoose');

// genre schema

var genreSchema = mongoose.Schema({
    name: {
        type: String, //has to be caps
        required: true //validation
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//get genres

module.exports.getGenres = function(callback, limit) {
    Genre.find(callback).limit(limit);
}

// add a genre
//takes genre object which is data from the form
module.exports.addGenre = function(genre, callback) {
    Genre.create(genre, callback);
}

// update a genre
//takes genre object which is data from the form
module.exports.updateGenre = function(id, genre, options, callback) {

    var query = { _id: id };
    var update = {
        name: genre.name
    }
    Genre.findOneAndUpdate(query, update, options);
}