import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/authOperations';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (state, action) => {
      state = action.payload;
      // Значення фільтра = пошуковий запит
      return state;
    },
  },
  // Очистка пошукового фільтру після logOut
  extraReducers: builder => {
    builder.addCase(logOut.fulfilled, state => {
      return (state = '');
    });
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
