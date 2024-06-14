// src/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string
}

const initialState: User = {
    id: "664b72bd968f47e560bc04f4"
};

const userSlice = createSlice({
  name: 'routePosition',
  initialState,
  reducers: {


  },
});

export const {  } = userSlice.actions;

export default userSlice.reducer;
