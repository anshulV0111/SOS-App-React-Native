import { Alert, BackHandler, Platform, ToastAndroid } from 'react-native'
import { useTranslation } from 'react-i18next'

let currentCount = 0

const backPressHandler = (t) => {
  if (currentCount < 1) {
    currentCount += 1
    if (Platform.OS === 'ios') {
      Alert.alert(t('pressAgainToExitApp'))
    } else {
      ToastAndroid.show(t('pressAgainToExitApp'), ToastAndroid.SHORT)
    }
  }
  setTimeout(() => {
    currentCount = 0
  }, 2000)
}

const useDoubleBackPressToExitApp = () => {
  const { t } = useTranslation()
  if (Platform.OS === 'ios') return
  const subscription = BackHandler.addEventListener('hardwareBackPress', () => {
    if (currentCount === 1) {
      BackHandler.exitApp()
      subscription.remove()
      return true
    }
    backPressHandler(t)
    return true
  })
}

export default useDoubleBackPressToExitApp
