import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appSlice';
import { favoriteReducer } from './reducers/favoriteSlice';
import { wishlistReducer } from './reducers/wishlistSlice';
import { userReducer } from './reducers/userSlice';


export const store = configureStore({
  reducer: {
    app: appReducer,
    favorites: favoriteReducer,
    wishlist: wishlistReducer,
    user: userReducer
  },
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>

