import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  baseURL: 'http://localhost:3000/'   
};

const URLSlice = createSlice({
  name: 'URL',
  initialState,
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseURL = action.payload
    },
  }
});

export const { setBaseUrl } = URLSlice.actions;
export default URLSlice.reducer;
