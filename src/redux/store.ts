// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userReducer from './slices/userSlice';
import { PersistConfig } from 'redux-persist/es/types';

// Create a persist configuration
const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});

// Create a persistor
const persistor = persistStore(store);

// Export the store and persistor
export { store, persistor };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
