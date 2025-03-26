import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../features/auth/auth.slice';
import { profileApi } from '../features/dashboard/profile/profile.api';
import productsSlice from '../features/dashboard/products/products.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(profileApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
