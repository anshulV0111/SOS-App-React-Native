import StaticColors from '@/Theme/static-colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  listAccordianRoot: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    width: '95%'
  },
  listAccordian: {
    backgroundColor: StaticColors.white,
    borderRadius: 10,
    overflow: 'hidden'
  },
  titleStyle: {
    color: StaticColors.black,
    fontSize: 16,
    fontWeight: '800',
    paddingTop: 8,
    paddingBottom: 8
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
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: StaticColors.lightBlue,
    alignItems: 'center',
    height: 60,
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 0,
    borderBottomWidth: 2,
    borderColor: StaticColors.gray800
    // borderColor: 'red'
  },
  listItemFirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: StaticColors.lightBlue,
    alignItems: 'center',
    height: 60,
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 0,
    borderBottomWidth: 2,
    borderColor: StaticColors.gray800,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  listItemLast: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: StaticColors.lightBlue,
    alignItems: 'center',
    height: 60,
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  nolistItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: StaticColors.primaryBlue,
    height: 60,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  listLabel: {
    fontSize: 14,
    color: StaticColors.black,
    fontWeight: '600'
  },
  listValue: {
    fontSize: 14,
    color: StaticColors.black,
    fontWeight: '800'
  },
  block: {
    paddingBottom: 10
  }
})
