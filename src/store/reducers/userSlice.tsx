import { createSlice } from '@reduxjs/toolkit';


export interface IUser {
  id: number;
  name: string;
  birthDate: string;
  phoneNumber: string;
  gender: string;
  email: string;
  photo: string;
  address: string;
}

export interface IUserSlice {
  isLogin: boolean;
  data: IUser;
}

const initialState: IUserSlice = {
  isLogin: false,
  data: {
    id: 0,
    name: '',
    birthDate: '',
    phoneNumber: '',
    gender: '',
    email: '',
    photo: '',
    address: ''
  }
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