import { createSlice } from '@reduxjs/toolkit';


export interface IUser {
  id: number
  name: string
  birthDate: string
  phoneNumber: string
  gender: string
  email: string
  photo: string,
  address: string
  faves: []
}

interface IUserSlice {
  isLogin: boolean;
  data: IUser | null;
}

const initialState: IUserSlice = {
  isLogin: false,
  data: null
};
export const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setLogin, setUser } = userSlices.actions;
export const userReducer = userSlices.reducer;