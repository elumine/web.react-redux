import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../../store';
import { Product } from './product';

export interface GetProductsRequest {
}

export interface GetProductsResponse {
    products: Product[];
}

export const getProducts = createAsyncThunk(
    'products/get',
    async ({} : GetProductsRequest, { fulfillWithValue, getState }): Promise<GetProductsResponse> => {
        const response = await axios.get<any, any>(
            'https://dummyjson.com/products',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${( getState() as RootState).auth.token }`
                }
            }
        );
        return fulfillWithValue<GetProductsResponse>({ products: response.data.products });
    }
  )