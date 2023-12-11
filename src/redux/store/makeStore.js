"use client";

import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../features/blog/blogSlice";
import authReducer from "../features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      blog: blogReducer,
      auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};
