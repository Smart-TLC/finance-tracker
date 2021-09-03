const router = require("express").Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/key");
const { register, login } = require("../../services/auth");
const ERROR = require("../../types/errors");

// Register endpoint
router.post("/register", (req, res) => {
  register(req.body)
    .then((result) => {
      res.json({ success: true });
    })
    .catch((err) => {
      if (err.message.includes(ERROR.REGISTER_VALIDATION_ERROR)) {
        res.status(400).json({ success: false, err: err.message });
      }
      switch (err.message) {
        case ERROR.EMAIL_EXISTED:
          res.status(409).json({ success: false, err: err.message });
          break;
        default:
          res.status(500).json({ success: false, err: err.message });
          break;
      }
    });
});

// Login validation
router.post("/login", (req, res) => {
  login(req.body)
    .then((result) => {
      // create JWT payload
      const payload = {
        id: result.id,
        name: result.name,
      };

      // sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926, // 1 year in seconds
        },
        (err, token) => {
          if (err) {
            res.status(401).json({ success: false, err: err });
          }
          res.json({
            success: true,
            token: "Bearer " + token,
          });
        }
      );
    })
    .catch((err) => {
      if (err.message.includes(ERROR.LOGIN_VALIDATION_ERROR)) {
        res.status(400).json({ success: false, err: err.message });
      } else {
        res.status(401).json({ success: false, err: err.message });
      }
    });
});

module.exports = router;
