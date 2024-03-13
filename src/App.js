import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import './Translations'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ApplicationNavigator from './Navigators'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <ApplicationNavigator />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
)

export default App
