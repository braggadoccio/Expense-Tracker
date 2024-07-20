import { configureStore } from "@reduxjs/toolkit";
// prettier-ignore
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import { storage } from "redux-persist/lib/storage";
