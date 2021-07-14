const router = require("express").Router();

// authentication api
router.use("/auth", require("./auth"));

module.exports = router;