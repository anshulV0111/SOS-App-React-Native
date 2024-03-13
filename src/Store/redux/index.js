import api from '@/Network/api'
import authSlice from './Auth/Auth.slice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import loaderSlice from './Loader/Loader.slice'
import ThemeSlice from './Theme/Theme.slice'

const reducers = combineReducers({
  api: api.reducer,
  auth: authSlice,
  loader: loaderSlice,
  theme: ThemeSlice
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'theme']
}

export const persistedReducer = persistReducer(persistConfig, reducers)
