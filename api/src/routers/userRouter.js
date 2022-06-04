import express from "express";
import { createUser, findUser } from "../modules/user/User.model.js";
const router = express.Router();

// User Registration
router.post("/", async (req, res) => {
  // console.log(req.body);

  try {
    // Send data to the DB queries
    const result = await createUser(req.body);
    console.log(result); // **Send the request in http to see if the data is created and getting stored in the data base

    res.json({
      status: "success",
      message: "User created successfully",
    });
  } catch (error) {
    // console.log(error);

    let message = error.message;
    if (error.message.includes("E11000 duplicate key error")) {
      message = "This email is already registered";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

// User Login endpoint
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findUser({ email, password });

    if (user?._id) {
      user.password = undefined; // When storing the user information in the session storage, we make sure that the password is not stored
      return res.json({
        status: "success",
        message: "user logged in successfully",
        user,
      });
    }
    console.log(user);
    res.json({
      status: "error",
      message: "Invalid login credentials",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

export default router;
