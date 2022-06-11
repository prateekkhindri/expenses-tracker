import { postUser } from "../../helpers/axiosHelper";
import { setIsLoading, setResponse } from "./regLogin.slice";

export const registerAction = (form) => async (dispatch) => {
  // Set the loader on
  setIsLoading();

  // Call axios
  const result = await postUser(form);
  console.log(result);

  // Set the response
  dispatch(setResponse(result));
};
