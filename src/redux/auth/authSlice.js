import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: bilder => {
    bilder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)

      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
