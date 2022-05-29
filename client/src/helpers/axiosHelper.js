import axios from "axios";

const apiEp = "http://localhost:8000/api/v1/users";

const postUser = (usrObj) => {
  try {
    axios.post();
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
