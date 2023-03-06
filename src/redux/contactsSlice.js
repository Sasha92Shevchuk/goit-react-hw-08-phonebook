import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: '0', name: 'Oleksandr Shevchuk', number: '56435345435' },
  { id: '1', name: 'anton', number: '6416484864484864' },
  { id: '2', name: 'Oleh', number: '46545454545454' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
