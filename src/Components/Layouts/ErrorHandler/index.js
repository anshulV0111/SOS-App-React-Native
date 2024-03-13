import React from 'react'
import CustomButton from '@/Components/UI-Kit/CustomButton'
import { View, Text } from 'react-native'
import { styles } from './ErrorHandler.styles'

const ErrorHandler = ({ resetError }) => (
  <View style={styles.root}>
    <Text style={styles.textStyle}>Something happened!</Text>
    {/* <Text>{props.error.toString()}</Text> */}
    <CustomButton onPress={() => resetError()} value='Try again' w='40%' style={{ margin: 20 }} />
  </View>
)

export default ErrorHandler
