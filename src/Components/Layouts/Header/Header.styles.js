const { StyleSheet, Platform } = require('react-native')

const isIosDevice = Platform.OS === 'ios'

export const styles = StyleSheet.create({
  root: {
    height: isIosDevice ? 70 : 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 15,
    justifyContent: 'space-between'
  },
  iconStyle: {
    // marginTop: isIosDevice ? 50 : 10,
    paddingHorizontal: 2
  },
  headingStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // top: isIosDevice ? 75 : 33,
    width: '100%'
  }
})
