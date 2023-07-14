import { configureStore } from '@reduxjs/toolkit';
import nguoiDungSlice from './slices/nguoiDungSlice';

export const store = configureStore({
  reducer: {
    nguoiDung: nguoiDungSlice,
  },
});
