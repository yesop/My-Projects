import {createSlice} from '@reduxjs/toolkit';
import {changePassword, loginUser, logoutUser, RegisterUser} from "../api/API";

const authSlice = createSlice({
    name: 'userAuth',
    initialState: {
        isLoggedIn: false,
        isLoading: false,
        token: null,
        userId: null,
        email: null,
        username: null,
        names: null,
        address: null,
        phoneNumber: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoggedIn = true;
                state.isLoading = false;
                state.token = action.payload.token;
                state.userId = action.payload.user_id;
                state.email = action.payload.email;
                state.username = action.payload.username;
                state.names = action.payload.names;
                state.address = action.payload.address;
                state.phoneNumber = action.payload.phoneNumber;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                // Update the state with the error messages for username and email
                state.error = action.payload;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.token = null;
                state.userId = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                // Update the state with the error messages for username and email
                state.error = action.payload;
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.error = null;
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                // Update the state with the error messages for username and email
                state.error = action.payload;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
            })

    },
});


export default authSlice.reducer;