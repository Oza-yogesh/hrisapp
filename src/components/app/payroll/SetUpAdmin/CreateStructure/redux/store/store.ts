import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../slices/sidebarslice";
import rulesslice from "../slices/rulesslice";
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    rules:rulesslice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
