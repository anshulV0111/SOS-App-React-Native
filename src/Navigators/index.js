import React, { useEffect } from 'react'
// import { SafeAreaView } from 'react-native'
import {
  useNavigationContainerRef
} from '@react-navigation/native'

import { useFlipper } from '@react-navigation/devtools'

import AppRootNavigator from './Navigations'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useAppTheme } from '@/Theme-Hooks'
import useNativeBaseTheme from '@/Theme-Hooks/native-base/theme'
import { NativeBaseProvider } from 'native-base'
import ErrorBoundary from 'react-native-error-boundary'
import ErrorHandler from '@/Components/Layouts/ErrorHandler'

// @refresh reset
const ApplicationNavigator = () => {
  const { i18n } = useTranslation()
  const { Layout, NavigationTheme } = useAppTheme()
  const { colors } = NavigationTheme
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)

  const { theme } = useNativeBaseTheme()
  const { language } = useSelector((state) => state.auth)

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [])

  return (
    <NativeBaseProvider theme={theme}>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <SafeAreaView edges={['right', 'left', 'top']} style={[Layout.fill, { backgroundColor: colors.red }]}>
          <AppRootNavigator />
        </SafeAreaView>
      </ErrorBoundary>
    </NativeBaseProvider>
  )
}
export default ApplicationNavigator
