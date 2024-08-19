import { configureStore } from "@reduxjs/toolkit";
import FoodApp from "../Global/Slice"
import storage from 'redux-persist/lib/storage';
import { FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER

 } from 'redux-persist/es/constants';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
    key: 'root',
    version:1,
    storage,
  };
const persistedReducer = persistReducer(persistConfig, FoodApp);


export const store= configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER
                ]
            }
        });
        return middlewares;
    }
})
export const persistor = persistStore(store)