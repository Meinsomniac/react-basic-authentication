import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./authSlice";
import { authApi } from "../api/authApi";

export const store = configureStore({
    reducer:{
        root:authSlice.reducer,
        [authApi.reducerPath]:authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
})