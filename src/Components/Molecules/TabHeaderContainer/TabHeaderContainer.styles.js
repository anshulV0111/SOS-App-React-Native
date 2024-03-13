import Colors from '@/Theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    marginTop: 0,
    height: 50,
    width: '100%',
    flexDirection: 'row'
    // borderWidth: 1
  },
  tabButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedTab: ({ activeTab, tab }) => ({
    color: activeTab === tab.screenName ? Colors.white : Colors.mattBlack,
    marginTop: 3,
    fontWeight: '500',
    backgroundColor: activeTab === tab.screenName ? Colors.primaryBlue : 'transparent',
    borderRadius: 8,
    paddingTop: 5,
    paddingBottom: 7,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 12
  }),
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryBlue
  }
})
