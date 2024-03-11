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
  goods: Array<IProduct>;
}

const initialState: InitialState = {
  goods: []
};
export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.goods = [...state.goods.filter(el => el.id !== action.payload.id), action.payload];
    },
    resetFavorites: (state) => {
      state.goods = [];
    },
    deleteFromFavorites: (state, { payload: product }) => {
      state.goods = [...state.goods.filter(el => el.id !== product.id)];
    }
  }
});

export const { addFavorites, deleteFromFavorites, resetFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;