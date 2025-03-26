import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface RegistrationRequest {
  username: string;
  password: string;
}

export interface RegistrationResponse {
  token: string;
}

export const registration = createAsyncThunk(
    'auth/registration',
    async ({ username, password } : RegistrationRequest, { fulfillWithValue }): Promise<RegistrationResponse> => {
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
        return fulfillWithValue<RegistrationResponse>({ token: response.data.accessToken });  
      } catch (error) {
        return fulfillWithValue<RegistrationResponse>({ token: '12345' });  
      }
    }
  )