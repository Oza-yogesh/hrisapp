// src/slices/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface UserState {
  _id: string | null;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar: string;
}

// Define the initial state using that type
const initialState: UserState = {
  _id: null,
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  avatar :"",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

// Export actions
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
