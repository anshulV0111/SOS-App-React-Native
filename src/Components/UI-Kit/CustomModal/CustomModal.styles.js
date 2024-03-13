import StaticColors from '@/Theme/static-colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20
  },
  textStyle: {
    fontSize: 16,
    color: StaticColors.black
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20
  },
  fullScreenContainerStyle: {
    backgroundColor: StaticColors.white,
    flex: 1,
    width: '100%'
  }
})
