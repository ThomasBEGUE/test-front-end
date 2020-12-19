import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 'fr_FR',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectLanguage = state => state.language.value;

export default languageSlice.reducer;
