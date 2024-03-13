import React from 'react'
import BackArrowIcon from '@/Components/UI-Kit/Icons/iconComponents/BackArrowIcon'
import { goBackNavigation } from '@/Navigators/utils'
import { useTheme } from 'native-base'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../Header.styles'

const DefaultHeader = ({ heading, t }) => {
  const { colors } = useTheme()

  return (
    <>
      <View style={[styles.root, { backgroundColor: colors.primaryColor }]}>
        <TouchableOpacity style={{ ...styles.iconStyle, marginLeft: 5, padding: 2 }} onPress={() => goBackNavigation()}>
          <BackArrowIcon />
        </TouchableOpacity>

        <View style={styles.headingStyle}>
          <Text style={{ color: colors.primaryText, fontWeight: 'bold', fontSize: 18 }}>{t(heading)}</Text>
        </View>
      </View>
    </>
  )
}

export default DefaultHeader
