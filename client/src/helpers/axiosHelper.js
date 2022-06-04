import axios from "axios";

const rootUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1/users"
    : "http://localhost:8000/api/v1";

const userEP = rootUrl + "/users";
const transactionEp = rootUrl + "/transactions";

// Creating new User
export const postUser = async (usrObj) => {
  try {
    const { data } = await axios.post(userEP, usrObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// Login User

export const loginUser = async (usrObj) => {
  try {
    const { data } = await axios.post(userEP + "/login", usrObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// Transaction APIS
export const postTransaction = async (transObj) => {
  try {
    const { data } = await axios.post(transactionEp, transObj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
