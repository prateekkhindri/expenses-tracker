import express from "express";
import { createTable } from "../modules/user/User.model.js";
const router = express.Router();

router.post("/", async (req, res) => {
  // console.log(req.body);

  // Send data to the DB queries
  const result = await createTable(req.body);
  console.log(result); // **Send the request in http to see if the data is created and getting stored in the data base

  res.json({
    status: "success",
    message: "User created successfully",
  });
});

export default router;
