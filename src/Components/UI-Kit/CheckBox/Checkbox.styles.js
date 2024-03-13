import StaticColors from '@/Theme/static-colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  textStyle: {
    color: StaticColors.black,
    marginRight: 5,
    fontSize: 14
  }
})
