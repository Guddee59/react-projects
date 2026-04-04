import {rootreducer} from "./reducer/main";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist"; 
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootreducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
