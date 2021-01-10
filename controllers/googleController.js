const axios = require("axios");

const db = require("../models");

// Search and return books from Google Books API
  // ensure that each returned book contains the elements required in the book model

module.exports = {

  findAll: function(req, res) {

    const {query: params} = req;

    axios
      .get("https://www.googleapis.com/books/v1/volumes"), {
        params
      }
      .then(results =>
        results.data.items.filter(
          book =>
          book.volumeInfo.title && book.volumeInfo.authors &&
          book.volumeInfo.description && book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.thumbnail
        )
        )

        .then(books => res.json(books))
        .catch(err => res.status(422).json(err))
  }
};