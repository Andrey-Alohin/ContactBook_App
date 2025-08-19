import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null as string | null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, actions: PayloadAction<string>) => {
      state.accessToken = actions.payload;
    },
    removeAccessToken: (state) => {
      state.accessToken = null;
    },
  },
});

export const { setAccessToken, removeAccessToken } = slice.actions;
export const AuthReducer = slice.reducer;
