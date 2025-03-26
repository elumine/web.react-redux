import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getProducts } from './getProducts.action';
import { Product } from './product';


export interface ProductsState {
    products: Product[];
}
const initialState: ProductsState = {
    products: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
        //
    });
  },
})

// export const { logout } = productsSlice.actions;
export default productsSlice.reducer;