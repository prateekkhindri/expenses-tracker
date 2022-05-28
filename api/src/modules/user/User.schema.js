import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 characters"],
    },
    password: {
      type: String,
      required: true,
      minLength: [5, "Password must be less than 50 characters"],
      maxLength: [50, "Password must be less than 50 characters"],
    },
  },
  {
    timestamps: true,
  }
);

// We just created a new schema called UserSchema, now time to convert
export default mongoose.model("User", UserSchema); //Users
