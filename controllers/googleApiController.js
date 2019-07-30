const axios = require("axios");

const KEY = process.env.GOOGLE_BOOK_API;

module.exports = {
    search: function(req, res) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.term + "&key=" + KEY)
        .then(result => res.json(result.data))
        .catch(err => res.status(422).json(err));
    }
};