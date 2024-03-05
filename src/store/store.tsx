import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appSlice';
import { favoriteReducer } from './reducers/favoriteSlice';
import { wishlistReducer } from './reducers/wishlistSlice';


export const store = configureStore({
  reducer: {
    app: appReducer,
    favorites: favoriteReducer,
    wishlist: wishlistReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>

