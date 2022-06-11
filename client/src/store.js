import { configureStore } from "@reduxjs/toolkit";
import regLoginReducer from "./pages/register-login/regLogin.slice";

const store = configureStore({
  reducer: {
    regLogin: regLoginReducer,
  },
});

export default store;
