import { Text } from 'native-base'
import React from 'react'

const CustomText = ({
  fontSize,
  children,
  ...otherProps
}) => {
  return (
    <Text
      fontSize={fontSize}
      {...otherProps}
    >
      {children}
    </Text>
  )
}

export default CustomText

CustomText.defaultProps = {
  fontSize: 'md'
}
