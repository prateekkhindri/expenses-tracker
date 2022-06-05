import TransactionSchema from "./Transaction.schema.js";

// Create a new Transaction in the table (queries)

export const createTransaction = (newTransactionObj) => {
  return TransactionSchema(newTransactionObj).save();
};

// Find single transaction
export const findTransaction = (filter) => {
  return TransactionSchema.findOne(filter);
};

// Find all transactions, @filter should be an object
export const findTransactions = (filter) => {
  return TransactionSchema.find(filter);
};

// Delete Transactions
export const deleteTransactions = (ids, userId) => {
  return TransactionSchema.deleteMany({ _id: { $in: ids }, userId });
};

// *** We now call the function createTransaction in transactionRouter and invoke it with req.body as it holds the data
