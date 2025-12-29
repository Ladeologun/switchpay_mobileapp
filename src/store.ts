import { Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import { useMMKV } from "react-native-mmkv";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthReducer } from "./features/auth";

// const storage = useMMKV();

const rootReducer = combineReducers({ 
  auth: AuthReducer
  
})

// const mmkvPersistStorage = {
//     setItem: (key: string, value: string) => {
//         storage.set(key, value);
//         return Promise.resolve(true);
//     },
//     getItem: (key: string) => {
//         const value = storage.getString(key); 
//         return Promise.resolve(value);
//     },
//     removeItem: (key: string) => {
//         storage.remove(key);
//         return Promise.resolve(true);
//     }
// };

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const persistedReducer = persistReducer<
  ReturnType<typeof rootReducer>, // state
  Action<string>                  // action
>(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
        