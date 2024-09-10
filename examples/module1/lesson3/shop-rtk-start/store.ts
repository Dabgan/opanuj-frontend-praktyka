import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './state/cartSlice';
import productReducer from './state/productSlice';
import { productApi } from './services/products';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
