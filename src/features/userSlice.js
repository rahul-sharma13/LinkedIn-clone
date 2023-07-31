//integrating redux
//it is used to overcome PROP DRILLING issue.
//userSlice stores user information to be used different components as  required.
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState:{
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state , action) => {
      state.user = action.payload;
    },
    
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state) => {
      state.user = null;

    },
  },
  
  },
);

export const { login, logout } = userSlice.actions;

//SELECTORS - which allow us to pull information when required
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
