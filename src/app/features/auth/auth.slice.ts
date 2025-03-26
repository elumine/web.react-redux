import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { login } from './login/login.action';
import { registration } from './registration/registration.action';

export type AuthStateStatus = 'idle' | 'pending' | 'succeeded' | 'failed';
export interface AuthState {
    token: string;
    status: AuthStateStatus;
    errorMessage: string;
}
const initialState: AuthState = {
    token: localStorage.getItem('auth/token'),
    status: 'idle',
    errorMessage: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout: (state) => {
        state.token = null;
        state.status = 'idle';
        state.errorMessage = null;
        localStorage.removeItem('auth/token');
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
        state.status = 'pending';
    });
    builder.addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('auth/token', state.token);
        state.status = 'succeeded';
        state.errorMessage = null;
    });
    builder.addCase(login.rejected, (state, action) => {
        state.token = null;
        state.status = 'failed';
        state.errorMessage = `${action.error.code}. ${action.error.message}`;
    });
    builder.addCase(registration.pending, (state, action) => {
        state.status = 'pending';
    });
    builder.addCase(registration.fulfilled, (state, action) => {
        state.token = action.payload.token;
        localStorage.setItem('auth/token', state.token);
        state.status = 'succeeded';
        state.errorMessage = null;
    });
    builder.addCase(registration.rejected, (state, action) => {
        state.token = null;
        state.status = 'failed';
        state.errorMessage = `${action.error.code}. ${action.error.message}`;
    });
  },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;