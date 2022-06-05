import express from "express";
import {
  createTransaction,
  findTransactions,
} from "../modules/transactions/Transaction.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;
    console.log(req.headers.authorization);

    const filter = { userId: authorization };

    const result = await findTransactions(filter);

    res.json({
      status: "success",
      message: "Transaction List",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);

    const result = await createTransaction(req.body);

    result?.id
      ? res.json({
          status: "success",
          message: "New transaction has been added successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to create a new transaction, please try again",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
