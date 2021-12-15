import {Action, AnyAction, combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import accountSlice from "@/store/slice/Account";
import {useDispatch} from "react-redux";

// do not need storage i18n context
const settingPersistConfig = {
  key: 'setting',
  storage,
  blacklist: ['language']
}
const rootReducer = combineReducers({
  account: accountSlice.reducer,
})

const persistConfig = {
  key: 'kalista',
  storage,
  blacklist: ['setting']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return  getDefaultMiddleware({ serializableCheck: false }).concat(thunk)
  }
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

declare module "react-redux" {
  export interface DefaultRootState extends RootState {}
}
