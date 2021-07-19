const router = require("express").Router();

// authentication api
router.use("/auth", require("./auth"));

// transaction api
router.use("/", require("./transaction"));

module.exports = router;