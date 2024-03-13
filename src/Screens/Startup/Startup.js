import { Brand } from '@/Components'
import { useAppTheme } from '@/Theme-Hooks'
import { setDefaultTheme } from '@/Store/redux/Theme/Theme.slice'

import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

const Startup = ({ navigation }) => {
  const { Layout, Gutters } = useAppTheme()
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000)
    )
    await setDefaultTheme({ theme: 'default', darkMode: null })
    navigation.reset({
      index: 0,
      routes: [{ name: 'MainDrawerNavigation' }]
    })
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size='large' style={[Gutters.largeVMargin]} />
    </View>
  )
}
export default Startup
