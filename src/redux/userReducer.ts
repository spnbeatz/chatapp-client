// src/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    conversations: string[]
}

const initialState: User = {
    conversations: []
};

const userSlice = createSlice({
  name: 'routePosition',
  initialState,
  reducers: {


  },
});

export const {  } = userSlice.actions;

export default userSlice.reducer;
