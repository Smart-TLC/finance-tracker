const router = require("express").Router();

// authentication api
router.use("/api/auth", require("./auth"));

// transaction api
router.use("/api/transaction", require("./transaction"));

module.exports = router;