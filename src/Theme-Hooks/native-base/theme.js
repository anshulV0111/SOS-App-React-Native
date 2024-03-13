import { useAppTheme } from '@/Theme-Hooks'
import { extendTheme } from 'native-base'

const config = {
  // useSystemColorMode: false
  // initialColorMode: 'dark'
}

const useNativeBaseTheme = () => {
  const { Colors } = useAppTheme()

  const theme = extendTheme({
    config,
    colors: {
      primary: {
        50: '#E3F2F9',
        100: '#C5E4F3',
        200: '#A2D4EC',
        300: '#7AC1E4',
        400: '#47A9DA',
        500: '#0088CC',
        600: Colors.primaryButton,
        700: '#006BA1',
        800: Colors.primaryButtonOnPress,
        900: '#003F5E'
      },
      ...Colors
    }
  })
  return {
    theme
  }
}

export default useNativeBaseTheme
