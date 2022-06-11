import { getTransactions } from "../../helpers/axiosHelper";
import { setIsLoading, setResponse, setTransactions } from "./dashboard.slice";

export const fetchTransactionsAction = () => async (dispatch) => {
  dispatch(setIsLoading());

  // Call API
  const data = await getTransactions();
  if (data.status === "success") {
    dispatch(setTransactions(data.result));
  }
};
