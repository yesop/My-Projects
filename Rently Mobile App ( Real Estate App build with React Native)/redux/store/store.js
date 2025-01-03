import {combineReducers, configureStore} from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {persistReducer, persistStore} from "redux-persist";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";
import authSlice from "../slices/authSlice";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: []
};

// Combine your reducers
const rootReducer = combineReducers({
    auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export {store, persistor};