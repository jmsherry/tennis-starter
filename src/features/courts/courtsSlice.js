import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCourts } from './courtAPI';

const initialState = {
  courts: [],
  status: 'idle',
  error: null,
};

export const getCourts = createAsyncThunk(
  'user/fetchCourts',
  async (creds) => {
    const response = await fetchCourts(creds);
    return response;
  }
);

export const courtSlice = createSlice({
  name: 'courts',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCourts.fulfilled, (state, action) => {
        // console.log(action)
        state.status = 'idle';
        state.error = null;
        state.courts = action.payload.courts;
      })
      .addCase(getCourts.rejected, (state, action) => {
        state.status = 'errored';
        state.error = action.error.message;
      });
  },
});

export const { logout } = courtSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.accessToken;


export default courtSlice.reducer;
