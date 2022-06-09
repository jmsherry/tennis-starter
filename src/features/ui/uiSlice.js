import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menu: {
    isOpen: false
  },
};

export const userSlice = createSlice({
  name: 'ui',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    open: (state) => {
      state.menu.isOpen = true;
    },
    close: (state) => {
      state.menu.isOpen = false;
    },
    toggle: (state) => {
      state.menu.isOpen = !state.menu.isOpen;
    },
  },

});

export const { open, close, toggle } = userSlice.actions;
console.log("🚀 ~ file: uiSlice.js ~ line 31 ~ toggle", toggle)

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectMenuState= (state) => state.ui.menu.isOpen;


export default userSlice.reducer;
