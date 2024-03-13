import React, { useEffect } from 'react'
import { Linking, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../utils'
import useCheckInternetConnection from '@/Utils/custom-hooks/useCheckInternetConnection'
import NoInternetStackNavigation from './Stack/NoInternetConnectionStack'
import AuthenticatedStackNavigation from './Stack/AuthenticatedStackNavigation'
import { SCREEN_NAMES } from '@/Utils/constants'
import { useAppTheme } from '@/Theme-Hooks'
import { useTheme } from 'native-base'

const linking = {
  prefixes: ['http://example', 'https://example']
}

let timeout = null

const AppRootNavigator = () => {
  const { darkMode, NavigationTheme } = useAppTheme()
  const { colors } = useTheme()

  const isOffline = useCheckInternetConnection()

  /** *****************Code to test deep Linking**********************/
  const getAndRedirectToUrl = async () => {
    const initialUrl = await Linking.getInitialURL()
    if (initialUrl === null) {
      return
    }
    if (initialUrl.includes('emergency')) {
      const regex = /[?&]([^=#]+)=([^&#]*)/g
      const params = {}
      let match
      // eslint-disable-next-line
      while (match = regex.exec(initialUrl)) {
        params[match[1]] = match[2]
      }

      timeout = setTimeout(() => {
        if (params?.counter && params?.emergency) {
          navigationRef.navigate(SCREEN_NAMES.viewEmergencyDetails, {
            emergencyCounter: params.counter,
            emergencyNumber: params.emergency
          })
        }
        clearTimeout(timeout)
      }, 1000)
    }
  }

  useEffect(() => {
    // Get the deep link used to open the app
    getAndRedirectToUrl()
  }, [])

  return (
    <NavigationContainer linking={linking} ref={navigationRef} theme={NavigationTheme}>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} backgroundColor={colors.red} />
      {
        isOffline
          ? (<NoInternetStackNavigation />)
          : (
            <AuthenticatedStackNavigation />
            )
      }
    </NavigationContainer>
  )
}

export default AppRootNavigator
