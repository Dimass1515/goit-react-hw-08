import { createSlice } from "@reduxjs/toolkit";
import { logIn, register, logOut, refreshUser } from "./operations";
import { handlePeding } from "../contacts/slice";

const handleRejected = (state) => {
    state.isLoading = false;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isLoading: false,
        isRefreshing: false,
    },
    extraReducers: (builder) =>
        builder
            .addCase(register.pending, handlePeding)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
                state.isLoggedIn = true;
            })
            .addCase(register.rejected, handleRejected)
            .addCase(logIn.pending, handlePeding)
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.rejected, handleRejected)
            .addCase(logOut.pending, handlePeding)
            .addCase(logOut.fulfilled, (state) => {
                state.user = {
                    name: null,
                    email: null,
                };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(logOut.rejected, handleRejected)
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            }),
});

export default authSlice.reducer;