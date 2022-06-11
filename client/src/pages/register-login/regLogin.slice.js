import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: {},
  isLoading: false,
};

// This must have 3 properties
const regLoginSlice = createSlice({
  name: "regLogin",
  initialState,
  reducers: {
    setIsLoading: (state) => {
      // Code
      state.isLoading = true;
    },

    setResponse: (state, action) => {
      state.response = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = regLoginSlice;

export const { setIsLoading, setResponse } = actions;

export default reducer;
