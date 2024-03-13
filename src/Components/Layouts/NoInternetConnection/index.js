import { View } from 'react-native'
import React from 'react'
import NoInternetIcon from '@/Components/UI-Kit/Icons/iconComponents/NoInternetIcon'

const NoInternetConnection = () => {
  return (
    <View style={{
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <NoInternetIcon />
    </View>
  )
}

export default NoInternetConnection
