import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NoInternetConnection from '@/Components/Layouts/NoInternetConnection'

const Stack = createStackNavigator()

const NoInternetStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen
        key='No Internet Connection'
        name='noInternetConnection'
        component={NoInternetConnection}
        options={{ animationEnabled: false, headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default NoInternetStackNavigation
