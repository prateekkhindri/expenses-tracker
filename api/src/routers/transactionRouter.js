import express from "express";

const router = express.Router();

router.get("/", (req, res) => {});

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
