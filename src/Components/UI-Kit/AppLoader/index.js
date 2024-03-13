import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from './AppLoader.styles'
import { useTheme } from 'native-base'

const AppLoader = ({ loading }) => {
  const { colors } = useTheme()

  return (
    loading
      ? (
        <View style={styles.root}>
          <ActivityIndicator
            color={colors.primaryBlue}
            size='large'
            animating
          />
        </View>
        )
      : (
        <></>
        )
  )
}

export default AppLoader
