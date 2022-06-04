import UserSchema from "./User.schema.js";

// Create a new user in the table (queries)

export const createUser = (newUserObj) => {
  return UserSchema(newUserObj).save();
};

// Find user, @usrobj should have an email and password
export const findUser = (userObj) => {
  return UserSchema.findOne(userObj);
};

// *** We now call the function createUser in userRouter and invoke it req.body as it holds the data
