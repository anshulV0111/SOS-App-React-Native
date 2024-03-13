import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'native-base'

const HelpScreen = () => {
  const { colors } = useTheme()

  return (
    <View>
      <Text style={{ color: colors.secondaryText }}>HelpScreen</Text>
    </View>
  )
}

export default HelpScreen
