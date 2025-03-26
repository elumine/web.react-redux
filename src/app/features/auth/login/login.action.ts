import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const login = createAsyncThunk(
    'auth/login',
    async ({ username, password } : LoginRequest, { fulfillWithValue }): Promise<LoginResponse> => {
      try {
        const response = await axios.post(
          'https://dummyjson.com/auth/login',
          { 
            username: 'emilys', 
            password: 'emilyspass'
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        return fulfillWithValue<LoginResponse>({ token: response.data.accessToken }); 
      } catch (error) {
        if (Math.random() > 0.5) {
          return fulfillWithValue<LoginResponse>({
            token: '12345'
          });
        }
        throw error;
      }
    }
  )