var mongoose = require('mongoose');

//Book schema
var bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String
    },
    pages:{
        type: String
    },
    image_url:{
        type: String
    },
    buy_url:{
        type: String
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get Books
module.exports.getBooks = function (callback, limit) {
    Book.find(callback).limit(limit);
}
//Get a Book
module.exports.getBookById = function (id, callback) {//no need limit,because return 1
    Book.findById(id, callback);
}
//Add Book
module.exports.addBook = function (book, callback) {//genre is object -> data from form
    Book.create(book, callback);
}
//Update Book
module.exports.updateBook = function (id, book, options, callback) {//genre is object -> data from form
    var query = {_id: id}; //the query
    var update = {
        title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        image_url: book.image_url,
        buy_url: book.buy_url

    }//object
    Book.findOneAndUpdate(query, update, options, callback);
}

//Delete Book
module.exports.deleteBook = function (id, callback) {//book is object -> data from form
    var query = {_id: id};
    Book.remove(query, callback);
}