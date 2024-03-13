import { useAppTheme } from '@/Theme-Hooks'
import React from 'react'
import { View, Image } from 'react-native'

const Brand = ({ height, width, mode }) => {
  const { Layout, Images } = useAppTheme()
  return (
    <View testID='brand-img-wrapper' style={{ height, width }}>
      <Image
        testID='brand-img'
        style={Layout.fullSize}
        source={Images.logo}
        resizeMode={mode}
      />
    </View>
  )
}
Brand.defaultProps = {
  height: 200,
  width: 200,
  mode: 'contain'
}
export default Brand
