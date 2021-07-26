const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add a name for your transaction']
  },
  note: {
    type: String,
    trim: true,
    // required: [true, 'Please add some note']
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number']
  },
  category: {
    type: String,
    required: [true, 'Please choose a category']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  spentAt: {
    type: String,
    required: [true, 'Please add date to spend']
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);