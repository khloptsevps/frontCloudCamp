import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice/formSlice';
import modalReducer from './modalSlice/modalSlice';

export const store = configureStore({
  reducer: {
    formReducer,
    modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
