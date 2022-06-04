import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      maxLength: [10, "Name must be less than 10 characters"],
    },
    title: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 characters"],
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// We just created a new schema called TransactionSchema, now time to convert
export default mongoose.model("Transaction", TransactionSchema); //Transaction
