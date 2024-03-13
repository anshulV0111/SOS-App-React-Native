import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { drawerRoutes } from '@/Navigators/routes'
import TabNavigation from '../Tab/TabNavigation'
import { useTranslation } from 'react-i18next'
import { Platform, View } from 'react-native'
// import { clearAsyncStorage } from '@/Utils/services/AsyncStorage.service'
// import { useDispatch } from 'react-redux'
// import { setAuthToken, setRefreshToken, setUser } from '@/Store/redux/Auth/Auth.slice'
import { useTheme } from 'native-base'
import Header from '@/Components/Layouts/Header'
// import LogoutIcon from '@/Components/UI-Kit/Icons/iconComponents/LogoutIcon'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
  const { colors } = useTheme()
  const { t } = useTranslation()
  // const dispatch = useDispatch()

  // const handleLogout = async () => {
  //   dispatch(setAuthToken(null))
  //   dispatch(setRefreshToken(null))
  //   dispatch(setUser(null))
  //   await clearAsyncStorage()
  // }

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          unmountOnBlur: true
        }}
        drawerContent={props => {
          const filteredProps = {
            ...props,
            state: {
              ...props.state,
              routeNames: props.state.routeNames,
              routes: props.state.routes
            }
          }
          return (
            <DrawerContentScrollView
              bounces={false}
              {...filteredProps}
              contentContainerStyle={{ marginTop: Platform.OS === 'ios' ? 0 : 0, height: '100%', position: 'relative', backgroundColor: colors.primaryColor }}
            >
              <DrawerItemList {...filteredProps} />
              <View style={{ borderBottomWidth: 1, position: 'absolute', top: '7%', width: '100%', borderBottomColor: colors.primaryBlue }} />
              {/* <TouchableOpacity style={{ padding: 20, width: '100%' }} onPress={handleLogout}>
                <View style={{ width: 82, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <LogoutIcon />
                  <Text style={{ color: colors.primaryText, fontSize: 14, fontWeight: '500' }}>{t('logout')}</Text>
                </View>
              </TouchableOpacity> */}
            </DrawerContentScrollView>
          )
        }}
      >
        <Drawer.Screen
          name='MainTabNavigation' component={TabNavigation} options={{
            drawerLabel: 'MainTabNavigation',
            headerShown: false,
            drawerItemStyle: {
              display: 'none'
            }
          }}
        />
        {
          drawerRoutes.map(item => (
            <Drawer.Screen
              key={item.routeName} name={item.routeName} component={item.component}
              options={{
                drawerLabel: t(item.drawerLabel),
                drawerIcon: item.optionIcon,
                drawerLabelStyle: {
                  marginLeft: -20,
                  color: colors.primaryText
                },
                headerShown: item.headerShown,
                header: item.headerShown
                  ? (
                      item.header
                        ? item.header
                        : () => (<Header headerHeading={t(item.headerHeading)} />)
                    )
                  : () => {}
              }}
            />
          ))
        }
      </Drawer.Navigator>
    </>
  )
}

export default DrawerNavigation
