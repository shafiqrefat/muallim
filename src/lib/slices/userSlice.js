'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMockData } from '../mockService';

export const loadUsers = createAsyncThunk('users/load', async () => {
  const data = await fetchMockData('users.json');
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = { id: Date.now(), ...action.payload };
      state.list.push(newUser);
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loadUsers.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
