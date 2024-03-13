import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from 'native-base'

const ContactUsScreen = () => {
  const { colors } = useTheme()
  return (
    <View>
      <Text style={{ color: colors.secondaryText }}>ContactUsScreen</Text>
    </View>
  )
}

export default ContactUsScreen
