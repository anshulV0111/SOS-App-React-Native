import React from 'react'
import BackArrowIcon from '@/Components/UI-Kit/Icons/iconComponents/BackArrowIcon'
import { useTheme } from 'native-base'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../Header.styles'

const ModalHeader = ({ heading, t, onBackPress, rightText, onRightPress }) => {
  const { colors } = useTheme()

  return (
    <>
      <View style={styles.root}>
        <TouchableOpacity style={{ ...styles.iconStyle, marginLeft: 5 }} onPress={onBackPress}>
          <BackArrowIcon />
        </TouchableOpacity>

        <View style={styles.headingStyle}>
          <Text style={{ color: colors.primaryBlue, fontWeight: 'bold', fontSize: 18 }}>{t(heading)}</Text>
        </View>

        {
        rightText && onRightPress
          ? (
            <TouchableOpacity style={{ ...styles.iconStyle, marginLeft: 5 }} onPress={onRightPress}>
              <Text style={{ color: 'black', fontWeight: '800' }}>{rightText}</Text>
            </TouchableOpacity>
            )
          : <></>
        }
      </View>
    </>
  )
}

export default ModalHeader
