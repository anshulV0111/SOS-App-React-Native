import React, { useEffect, useMemo, useRef } from 'react'
import { SCREEN_NAMES } from '@/Utils/constants'
import * as Animatable from 'react-native-animatable'
import { applicationTabRoutes } from '@/Navigators/routes'
import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Header from '@/Components/Layouts/Header'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'native-base'
import { useSelector } from 'react-redux'

const Tab = createBottomTabNavigator()

const animate1 = { 0: { scale: 0.5, translateY: 0 }, 0.50: { translateY: -10 }, 1: { scale: 1, translateY: -10 } }
const animate2 = { 0: { scale: 1, translateY: -10 }, 1: { scale: 1, translateY: 0 } }

const TabButton = (props) => {
  // const { t } = useTranslation()
  const { item, onPress, accessibilityState } = props
  const focused = accessibilityState.selected
  const viewRef = useRef(null)

  // const { colors } = useTheme()

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1)
    } else {
      viewRef.current.animate(animate2)
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{ ...styles.container, paddingBottom: '3%' }}
    >
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}
      >
        {
          focused ? <item.activeIcon /> : <item.inActiveIcon />
        }
      </Animatable.View>
      {/* <Text style={{ fontSize: 13, color: colors.primaryText }}>{t(item.tabLabel)}</Text> */}
    </TouchableOpacity>
  )
}

const TabNavigation = () => {
  const { t } = useTranslation()
  const { colors } = useTheme()
  const { contacts } = useSelector((state) => state.auth)

  const appTabRoutes = useMemo(() => contacts?.length ? applicationTabRoutes : applicationTabRoutes.slice(0, 1), [contacts])
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAMES.home}
      backBehavior='history'
      screenOptions={{
        unmountOnBlur: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 70,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: colors.white
        }
      }}
      sceneContainerStyle={{
        paddingBottom: '20%'
      }}
    >
      {
        appTabRoutes.map((item, index) => (
          <Tab.Screen
            key={index} name={item.routeName} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
              header: item.headerShown
                ? (
                    item.header
                      ? item.header
                      : () => (<Header variant='default' headerHeading={t(item.headerHeading)} />)
                  )
                : () => {},
              headerShown: item.headerShown
            }}
          />
        ))
      }
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TabNavigation
