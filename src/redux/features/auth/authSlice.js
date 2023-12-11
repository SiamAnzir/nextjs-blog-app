"use client";

import { loginApi } from "./authAPI";
import { useRouter } from "next/router";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  token: undefined,
  isLoading: false,
  error: "",
};

export const login = createAsyncThunk("auth/login", async (data) => {
  console.log(data);
  const response = await loginApi(data);
  return response;
});

//const router = useRouter();

const authSilce = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.token = undefined;
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = "";
        state.isLoading = false;
        state.token = action.payload;
        //document.cookie = `token = ${action.payload.access_token}`;
        let currentDate = new Date();

        // Calculate the expiration date (2 years from the current date)
        let expirationDate = new Date(currentDate);
        expirationDate.setFullYear(currentDate.getFullYear() + 2);

        // Format the expiration date in the required string format
        let expiresDateString = expirationDate.toUTCString();

        // Set the cookie with the expiration date
        document.cookie = `token = ${action.payload.access_token}; expires=${expiresDateString};`;

        localStorage.setItem("token", action.payload.access_token);

        window.location.href = "/";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message;
        state.token = undefined;
      });
  },
});

export default authSilce.reducer;
