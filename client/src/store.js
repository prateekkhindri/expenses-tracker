import { configureStore } from "@reduxjs/toolkit";
import regLoginReducer from "./pages/register-login/regLogin.slice";
import dashboardReducer from "./pages/dashboard/dashboard.slice";

const store = configureStore({
  reducer: {
    regLogin: regLoginReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
