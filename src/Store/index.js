import { persistedReducer } from './redux'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { persistStore } from 'redux-persist'
import updatedMiddleware from './middleware'

const store = configureStore({
  reducer: persistedReducer,
  middleware: updatedMiddleware
})

const persistor = persistStore(store)

setupListeners(store.dispatch)

export { store, persistor }
