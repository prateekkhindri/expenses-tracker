import TransactionSchema from "./Transaction.schema.js";

// Create a new Transaction in the table (queries)

export const createTransaction = (newTransactionObj) => {
  return TransactionSchema(newTransactionObj).save();
};

export const findTransaction = (filter) => {
  return TransactionSchema.findOne(filter);
};

export const findTransactions = (filter) => {
  return TransactionSchema.find(filter);
};

// *** We now call the function createTransaction in transactionRouter and invoke it with req.body as it holds the data
