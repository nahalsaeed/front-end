// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authSlices from '../slices/authSlices';

const store = configureStore({
  reducer: {
    auth: authSlices,
  },
});

export default store;
