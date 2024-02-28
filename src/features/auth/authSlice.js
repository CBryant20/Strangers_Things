import { createSlice } from "@reduxjs/toolkit";
import api from "../../store/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "users/register",
        method: "POST",
        body: { user },
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error.message,
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "users/login",
        method: "POST",
        body: { user },
      }),
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.data.error.message,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

const TOKEN_KEY = "token";

const storeToken = (state, { payload }) => {
  state.token = payload.token;
  window.sessionStorage.setItem(TOKEN_KEY, payload.token);
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: window.sessionStorage.getItem(TOKEN_KEY),
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      window.sessionStorage.removeItem(TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

export const { logout } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
