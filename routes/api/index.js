const path = require("path");
const router = require("express").Router();
const booksRoutes = require("./books");
const googleRoutes = require("./google");

// books routes
router.use("/books", booksRoutes);
// google routes
router.use("/google", googleRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
})

module.exports = router;