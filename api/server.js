import "dotenv/config";

import express from "express";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

import cors from "cors";
app.use(cors());

// DB Connection
import createConnection from "./src/config/dbConfig.js";
createConnection();

// API - Load middlewares
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
app.use("/api/v1/users", userRouter);
app.use("/api/v1/transactions", transactionRouter);

// For front end static content
app.get("/", (req, res) => {
  res.send("We will send the react app here");
});

// Making our app available to the server
app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`server is running on port http://localhost:${PORT}`);
});
