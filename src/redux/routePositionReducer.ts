// src/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoutePositionState {
    position: number
}

const initialState: RoutePositionState = {
    position: 0
};

const userSlice = createSlice({
  name: 'routePosition',
  initialState,
  reducers: {
    setRoutePosition(state, action: PayloadAction<RoutePositionState>) {
      state.position = action.payload.position;

    },

  },
});

export const { setRoutePosition } = userSlice.actions;

export default userSlice.reducer;
