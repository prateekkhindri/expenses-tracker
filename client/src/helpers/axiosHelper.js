import axios from "axios";

const apiEp =
  process.env.NODE_ENV === "production"
    ? "/api/v1/users"
    : "http://localhost:8000/api/v1/users";

const postUser = async (usrObj) => {
  try {
    const result = await axios.post();
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
