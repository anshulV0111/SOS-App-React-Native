import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { notAuthenticatedRoutes } from '@/Navigators/routes'

const Stack = createStackNavigator()

const NoAuthenticatedStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {
        notAuthenticatedRoutes.map(item => (
          <Stack.Screen
            key={item.routeName}
            name={item.routeName}
            component={item.component}
            options={{ animationEnabled: false, headerShown: false }}
          />
        ))
      }
    </Stack.Navigator>
  )
}

export default NoAuthenticatedStackNavigation
