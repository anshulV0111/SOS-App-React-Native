import StaticColors from '@/Theme/static-colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listitem: {
    backgroundColor: StaticColors.white,
    width: '100%'
  },
  listitemRadius: {
    backgroundColor: StaticColors.white,
    borderRadius: 12,
    width: '95%'
  },
  titleStyle: {
    color: StaticColors.black,
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 2,
    paddingBottom: 2
  },
  titleStylePadding: {
    color: StaticColors.black,
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 10,
    paddingBottom: 10
  },
  rightArrowIcon: {
    alignSelf: 'center',
    marginRight: 20
  }
})
