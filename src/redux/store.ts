// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import routePositionReducer from './routePositionReducer';
import exampleConvs from './exampleConvs';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    routePosition: routePositionReducer,
    exampleConvs: exampleConvs,
    user: userReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
