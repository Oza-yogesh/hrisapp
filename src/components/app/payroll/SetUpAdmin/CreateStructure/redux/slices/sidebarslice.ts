import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SidebarState {
  items: { name: string; employees: number }[];
}

const initialState: SidebarState = {
  items: [
    { name: "Text", employees: 0 },
 
  ],
};

const sidebarslice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    addEmployee: (
      state,
      action: PayloadAction<{ name: string; employees: number }>
    ) => {
      state.items.push(action.payload);
    },

    removeEmployeeByName(state, action: PayloadAction<string>) {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
  },
});

export const { addEmployee, removeEmployeeByName } = sidebarslice.actions;

export default sidebarslice.reducer;
