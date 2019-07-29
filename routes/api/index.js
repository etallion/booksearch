const router = require("express").Router();
const bookRoutes = require("./books");
import axios from "axios";

const KEY = process.env.GOOGLE_BOOK_API;

// Book routes
router.use("/books", bookRoutes);
// router.use("/search", googleApi);

router.route("/search")
  .get((req, res) => {
      const response;
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + req.params.id + "&key=" + KEY)
        .then(googleRes => response = dbModel);
  })
  .then(() => res.json(response))
  .catch(err => res.status(422).json(err));

module.exports = router;
