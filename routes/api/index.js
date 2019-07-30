const router = require("express").Router();
const bookRoutes = require("./books");
const googleApiRoutes = require("./googleBooks");

// Book routes
router.use("/books", bookRoutes);
router.use("/search", googleApiRoutes);

module.exports = router;
