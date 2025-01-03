import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = 'https://api.onemarketc.com/';

export const RegisterUser = createAsyncThunk(
    'auth/RegisterUser',
    async ({email, password, names, username, address}, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${API_URL}account/register/customer/`, {
                email: email,
                password: password,
                names: names,
                address: address,
                username: username,
                role: "customer",
            });
            // Assuming the response structure matches your Django view
            return response.data
        } catch (error) {
            // Use rejectWithValue to pass the error response data
            return rejectWithValue(error.response.data);
        }
    }
);
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${API_URL}account/login/`, {
                email_or_username: email,
                password: password,
            });
            // Assuming the response structure matches your Django view
            await SecureStore.setItemAsync('secure_token', response.data.token);
            return response.data
            // Store the token securely
        } catch (e) {
            // Handle errors
            return rejectWithValue(e.response.data);
        }
    }
);



export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/account/login/', {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            });
            if (response.status === 204) {
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export const sendOtpToEmail = createAsyncThunk(
    'auth/sendOtpToEmail',
    async ({email}, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://your-django-api-url/send-otp', {
                email: email,
            });

            if (response.status === 200) {
                // Assuming the response contains a success message or status
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (e) {
            // Handle errors
            return rejectWithValue(e.response.data);
        }
    }
);

export const validateOtpToken = createAsyncThunk(
    'auth/validateOtpToken',
    async ({otpToken}, {rejectWithValue}) => {
        try {
            const response = await axios.post('http://your-django-api-url/validate-otp', {
                token: otpToken,
            });

            if (response.status === 200) {
                // Store the OTP token in secure store
                await SecureStore.setItemAsync('otpToken', otpToken);
                // Assuming the response contains a success message or status
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (e) {
            // Handle errors
            return rejectWithValue(e.response.data);
        }
    }
);

export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async ({newPassword}, {rejectWithValue}) => {
        try {
            // Retrieve the OTP token from secure store
            const otpToken = await SecureStore.getItemAsync('otpToken');
            if (!otpToken) {
                console.error('No OTP token found in secure store.');
                return;
            }
            const response = await axios.post('http://your-django-api-url/password_reset', {
                token: otpToken,
                new_password: newPassword,
            });

            if (response.status === 200) {
                // Assuming the response contains a success message or status
                return response.data;
            } else {
                return rejectWithValue(response.data);
            }
        } catch (e) {
            // Handle errors
            return rejectWithValue(e.response.data);
        }
    }
);

export const changePassword = createAsyncThunk(
    'auth/changePassword',
    async ({oldPassword, newPassword}, {rejectedWithValue}) => {
        try {
            const response = await axios.put(`${API_URL}account/change_password/`, {
                old_password: oldPassword,
                new_password: newPassword,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${localStorage.getItem('token')}`// Include the Bearer token in the Authorization header
                },
            });
            if (response.status === 200) {
                alert('Password changed successfully.');
            } else {
                alert('Failed to change password.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
);
