import mongoose from "mongoose";

const createConnection = () => {
  try {
    const con = mongoose.connect(process.env.MONGO_URL);
    con && console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default createConnection;
