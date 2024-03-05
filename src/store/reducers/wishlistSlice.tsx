import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
  id: number,
  images: Array<string>,
  name: string,
  vendor: string,
  variants: number,
  type: string,
  count: number,
  price: {
    withDiscount: number,
    withoutDiscount: number,
    credit: number
  },
  fave: boolean,
  chips: [
    {
      type: '#FFAE00',
      label: 'Осталось 6 шт'
    }
  ]
}

interface InitialState {
  products: Array<IProduct>;
}

const initialState: InitialState = {
  products: []
};
export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      console.log(action.payload);
      state.products = [...state.products.filter(el => el.id !== action.payload.id), action.payload];
    },
    deleteFromWishlist: (state, { payload: product }) => {
      state.products = [...state.products.filter(el => el.id !== product.id)];
    }
  }
});

export const { addWishlist, deleteFromWishlist } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;