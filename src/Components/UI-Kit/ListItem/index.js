import React from 'react'
import { View } from 'react-native'
import { List } from 'react-native-paper'
import CustomSwitch from '../Switch'
import RightArrowIcon from '../Icons/iconComponents/RightArrowIcon'
import CheckMarkIcon from '../Icons/iconComponents/CheckMarkIcon'

import { styles } from './ListItem.styles'

const ListItem = ({
  title,
  onPress,
  type,
  isEnabled,
  onValueChange,
  leftIcon,
  description,
  style,
  checked,
  rightIcon,
  radius,
  ...otherProps
}) => {
  const LeftIcon = leftIcon
  const RightIcon = rightIcon

  let JSX = (
    <View style={styles.rightArrowIcon}>
      <RightArrowIcon />
    </View>
  )

  if (type !== 'default' && isEnabled !== undefined && onValueChange) {
    JSX = (
      <CustomSwitch
        onToggle={onValueChange}
        isChecked={isEnabled}
      />
    )
  } else if (type === 'checked') {
    JSX = (
      <View style={styles.rightArrowIcon}>
        {checked ? <CheckMarkIcon /> : <></>}
      </View>
    )
  }

  return (
    <List.Item
      title={title}
      style={radius
        ? {
            ...styles.listitemRadius,
            ...style
          }
        : {
            ...styles.listitem,
            ...style
          }}
      titleStyle={!description ? styles.titleStylePadding : styles.titleStyle}
      onPress={onPress}
      description={description}
      left={
        leftIcon
          ? props => <LeftIcon
              style={{
                alignSelf: 'center',
                padding: 5,
                marginLeft: 5
              }}
                     />
          : undefined
      }
      right={leftIcon
        ? props => <RightIcon
            style={{
              alignSelf: 'center',
              padding: 5,
              marginLeft: 5
            }}
                   />
        : props => JSX}
      {...otherProps}
    />
  )
}

export default ListItem

ListItem.defaultProps = {
  onPress: () => { },
  type: 'default',
  radius: true,
  isEnabled: null,
  onValueChange: null
}
