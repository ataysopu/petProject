import { createSlice } from '@reduxjs/toolkit';

interface InitState {
  tabActive: string;
}

const initialState: InitState = {
  tabActive: 'PERSONAL'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeActiveTab: (state, action) => {
      // @ts-ignore
      state.tabActive = action.payload;
      console.log(action.payload);
    }
  }
});

export const { changeActiveTab } = appSlice.actions;

export default appSlice.reducer;