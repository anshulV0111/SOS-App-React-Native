import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'native-base'

const ComingSoonScreen = () => {
  const { colors } = useTheme()
  return (
    <View>
      <Text style={{ color: colors.secondaryText }}>ComingSoonScreen</Text>
    </View>
  )
}

export default ComingSoonScreen
