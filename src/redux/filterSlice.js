import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filteredContacts(state, action) {
      return action.payload;
    },
  },
  // contactDeleted(state, action) {
  //   const index = state.items.findIndex(item => item.id === action.payload);
  //   if (index !== -1) {
  //     state.items = state.items
  //       .slice(0, index)
  //       .concat(state.items.slice(index + 1));
  //   }
  // },
});

export const { filteredContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
