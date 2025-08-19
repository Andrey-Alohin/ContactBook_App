import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "@/entites/user/model/authSlice";
import { baseApi } from "@/shared/api/baseApi";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
