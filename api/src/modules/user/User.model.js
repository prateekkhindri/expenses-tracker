import UserSchema from "./User.schema.js";

// Create a new user in the table (queries)

export const createTable = (newUserObj) => {
  return UserSchema(newUserObj).save();
};

// *** We now call the function createTable in userRouter and invoke it req.body as it holds the data
