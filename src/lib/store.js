'use client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './slices/userSlice';
import courseReducer from './slices/courseSlice';
import roleReducer from './slices/roleSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    courses: courseReducer,
    role: roleReducer,
    theme: themeReducer
  },
});

export const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
