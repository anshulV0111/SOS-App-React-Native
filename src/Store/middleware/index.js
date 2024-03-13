/* global __DEV__ */
import api from '@/Network/api'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const updatedMiddleware = (getDefaultMiddleware) => {
  const middlewares = getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }).concat(api.middleware)
  if (__DEV__ && !process.env.JEST_WORKER_ID) {
    const createDebugger = require('redux-flipper').default
    middlewares.push(createDebugger())
  }
  return middlewares
}

export default updatedMiddleware
