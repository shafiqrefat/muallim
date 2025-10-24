'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMockData } from '../mockService';

export const loadCourses = createAsyncThunk('courses/load', async () => {
  const data = await fetchMockData('courses.json');
  return data;
});

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(loadCourses.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default courseSlice.reducer;
