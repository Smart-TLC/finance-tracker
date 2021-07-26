const router = require("express").Router();
const { addTransaction, getTransactions, deleteTransaction, updateTransaction } = require("../../services/transaction");

// Get transactions endpoint
router.get("/", (req, res) => {
  getTransactions(req.query).then((result) => {
    res.status(200).json({ 
      success: true, 
      count: result.length, 
      data: result
   })
  }).catch((err) => {
    res.status(500).json({
      success: false,
      error: err.message
    });
  })
})

// Add Transactions
router.post("/", (req, res) => {
  addTransaction(req.body).then((result) => {
    res.status(201).json({
      success: true,
      data: result
    })
  }).catch((err) => {
    if(err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      res.status(500).json({
        success: false,
        error: err.message
      });
    }
  })
})

// Delete transactions
router.delete("/", (req, res) => {
  deleteTransaction(req.query).then((result) => {
    res.status(200).json({
      success: true,
      data: {}
    })
  }).catch((err) => {
    res.status(500).json({
      success: false,
      error: err.message
    });
  })
})

// Update transactions
router.patch("/", (req, res) => {
  updateTransaction(req.body).then((result) => {
    res.status(200).json({
      success: true,
      data: result
    })
  }).catch((err) => {
    res.status(500).json({
      success: false,
      error: err.message
    });
  })
})
 
module.exports = router;