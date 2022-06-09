import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './userAPI';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
  token: null,
};

export const login = createAsyncThunk(
  'auth/fetchUser',
  async (creds) => {
    const response = await fetchUser(creds);
    return response;
  }
);

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'idle';
        state.user = action.payload.user;
        state.error = null;
        state.token = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'errored';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectAccessToken = (state) => state.auth.accessToken;


export default userSlice.reducer;
