const router = require("express").Router();
const heroRoutes = require("./heroes");

// Hero routes
router.use("/heroes", heroRoutes);

module.exports = router;
