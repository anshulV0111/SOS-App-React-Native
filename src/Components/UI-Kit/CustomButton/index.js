import React from 'react'
import { Button } from 'native-base'
import StaticColors from '@/Theme/static-colors'

const CustomButton = ({
  onPress,
  value,
  size,
  variant,
  isLoading,
  isLoadingText,
  spinnerPlacement,
  LeftIcon,
  EndIcon,
  isDisabled,
  colorScheme,
  w,
  style,
  backgroundColor,
  textColor,
  textStyle,
  ...otherProps
}) => {
  return (
    <Button
      w={w}
      onPress={onPress}
      size={size}
      variant={variant}
      isLoading={isLoading}
      isLoadingText={isLoadingText || value}
      spinnerPlacement={spinnerPlacement}
      isDisabled={isDisabled}
      colorScheme={colorScheme}
      style={style}
      _text={{
        ...textStyle,
        color: textColor
      }}
        // _loading={{
        //   bg: 'amber.400:alpha.70',
        //   _text: {
        //     color: 'coolGray.700'
        //   }
        // }}
        // _spinner={{
        //   color: 'white'
        // }}
      {...otherProps}
    >
      {value}
    </Button>
  )
}

export default CustomButton

CustomButton.defaultProps = {
  onPress: () => {},
  value: '',
  size: 'md',
  variant: 'solid',
  isLoading: false,
  isLoadingText: '',
  spinnerPlacement: 'end',
  isDisabled: false,
  // uses primary.600 in theme folder and primary.800(onpress)
  // subtle variant uses primary.100 and primary.200(onpress)
  colorScheme: 'primary',
  w: '90%',
  backgroundColor: 'darkgreen',
  textColor: StaticColors.white
}
