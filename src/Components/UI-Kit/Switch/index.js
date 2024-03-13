import React from 'react'
import { Switch } from 'native-base'

const CustomSwitch = ({
  size,
  onToggle,
  isChecked,
  isDisabled,
  ...otherProps
}) => {
  return (
    <Switch
      size={size}
      onToggle={onToggle}
      isChecked={isChecked}
      isDisabled={isDisabled}
      {...otherProps}
    />
  )
}

export default CustomSwitch

CustomSwitch.defaultProps = {
  size: 'md'
}
