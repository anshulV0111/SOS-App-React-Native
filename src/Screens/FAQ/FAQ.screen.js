import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'native-base'

const FAQScreen = () => {
  const { colors } = useTheme()
  return (
    <View>
      <Text style={{ color: colors.secondaryText }}>FAQScreen</Text>
    </View>
  )
}

export default FAQScreen
