import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts(state, action) {
      return action.payload;
    },
  },
});

export const { filteredContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilter = state => state.filter;
