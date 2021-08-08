const Transaction = require('../models/transaction');
const ERROR = require("../types/errors");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
const getTransactions = async (data) => {
  const transactions = Transaction.find({ owner: data.id });

  return transactions
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
const addTransaction = async (data) => {
  const newTransaction = new Transaction(data);

  return newTransaction.save()
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
const deleteTransaction = async (data) => {
 
  const transaction = await Transaction.findById(data.id);

  if(!transaction) {
    throw new Error(ERROR.TRANSACTION_NOT_FOUND);
  }

  return transaction.remove();

}

const updateTransaction = async (data) => {
  const transaction = await Transaction.findByIdAndUpdate(data._id, data, { new: true });

  if(!transaction) {
    throw new Error(ERROR.TRANSACTION_NOT_FOUND);
  }

  return transaction;

}

module.exports = { addTransaction, getTransactions, deleteTransaction, updateTransaction }