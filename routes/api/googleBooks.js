const router = require("express").Router();
const booksController = require("../../controllers/googleApiController");

// Matches with "/api/search/:term"
router.route("/:term")
  .get(booksController.search);

module.exports = router;
