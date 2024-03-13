import StaticColors from '@/Theme/static-colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  root: {
    marginBottom: 50,
    width: '85%',
    height: 50
  },
  labelStyles: {
    fontSize: 14,
    width: '85%',
    color: StaticColors.black,
    textAlign: 'left',
    padding: 4
  },
  input: ({ height, backgroundColor }) => ({
    width: '100%',
    height,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 55,
    backgroundColor,
    color: StaticColors.black
  }),
  helperText: {
    fontSize: 14,
    width: '85%',
    textAlign: 'left'
  },
  inputEndIconContainer: ({ backgroundColor, height }) => {
    return {
      height,
      width: 55,
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor,
      position: 'absolute',
      top: '0%',
      right: '0%',
      zIndex: 1
    }
  }
})
