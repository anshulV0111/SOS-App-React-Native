import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import CheckedCheckboxIcon from '../Icons/iconComponents/CheckedCheckboxIcon'
import UnCheckedCheckBoxIcon from '../Icons/iconComponents/UnCheckedCheckBoxIcon'
import { styles } from './Checkbox.styles'

const CustomCheckBox = ({ value, onChange, labelRight, labelLeft, style }) => {
  return (
    <TouchableOpacity onPress={onChange} style={[styles.root, style]}>
      {labelLeft
        ? (
          <Text style={[styles.textStyle, { marginRight: 20 }]}>{labelLeft}</Text>
          )
        : (
          <></>
          )}
      <TouchableOpacity onPress={onChange}>
        {value
          ? (
            <CheckedCheckboxIcon />
            )
          : (
            <UnCheckedCheckBoxIcon />
            )}
      </TouchableOpacity>
      {labelRight
        ? (
          <Text style={[styles.textStyle, { marginLeft: 20 }]}>{labelRight}</Text>
          )
        : (
          <></>
          )}
    </TouchableOpacity>
  )
}

export default CustomCheckBox
