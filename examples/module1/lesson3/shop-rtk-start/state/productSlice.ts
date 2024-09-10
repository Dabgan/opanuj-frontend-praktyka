import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { RootState } from '../store';

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: true,
  error: null,
};

export const productsSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

export const selectProducts = (state: RootState) => state.products.items;
export const selectProductsLoading = (state: RootState) =>
  state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectProduct = (id: number) => (state: RootState) =>
  state.products.items.find((product: Product) => product.id === id);

export default productsSlice.reducer;
