var mongoose = require('mongoose');

//Genre schema
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get Genre
module.exports.getGenres = function (callback, limit) {
    Genre.find(callback).limit(limit);
}

//Add Genre
module.exports.addGenre = function (genre, callback) {//genre is object -> data from form
    Genre.create(genre, callback);
}

//Update Genre
module.exports.updateGenre = function (id, genre, options, callback) {//genre is object -> data from form
    var query = {_id: id}; //the query
    var update = {
        name: genre.name
    }//object
    Genre.findOneAndUpdate(query, update, options, callback);
}

//Delete Genre
module.exports.deleteGenre = function (id, callback) {//genre is object -> data from form
    var query = {_id: id};
    Genre.remove(query, callback);
}