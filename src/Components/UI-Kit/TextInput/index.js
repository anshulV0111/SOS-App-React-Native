import React, { useState } from 'react'
import { Box, FormControl, Input, Pressable, useTheme } from 'native-base'
import EyeIcon from '../Icons/iconComponents/EyeIcon'
import CrossedEyeIcon from '../Icons/iconComponents/CrossedEyeIcon'
import StaticColors from '@/Theme/static-colors'

const TextInput = ({
  value,
  handleChange,
  placeholder,
  w,
  size,
  variant,
  InputLeftElement,
  type,
  InputRightElement,
  maxW,
  error,
  style,
  borderColor,
  placeholderTextColor,
  focusOutlineColor,
  formLabel,
  ...otherProps
}) => {
  const { colors } = useTheme()
  const [show, setShow] = useState(false)
  return (
    <Box alignItems='center'>
      <FormControl isInvalid={error} alignItems='center'>
        <Box alignItems='flex-start' w={w}>
          {
          formLabel
            ? <FormControl.Label>{formLabel}</FormControl.Label>
            : <></>
        }
        </Box>
        <Input
          style={style}
          value={value}
          focusOutlineColor={error ? colors.red : focusOutlineColor}
          borderColor={error ? colors.red : borderColor}
          onChangeText={handleChange}
          placeholder={placeholder}
          w={w}
          maxW={maxW}
          size={size}
          variant={variant}
          InputLeftElement={InputLeftElement}
          placeholderTextColor={placeholderTextColor}
          type={type === 'password' ? show ? 'text' : 'password' : type}
          InputRightElement={
            type === 'password'
              ? (
                <Pressable onPress={() => setShow(!show)}>
                  {!show
                    ? (
                      <EyeIcon />
                      )
                    : (
                      <CrossedEyeIcon />
                      )}
                </Pressable>
                )
              : (
                  InputRightElement || <></>
                )
          }
          {...otherProps}
        />
        <FormControl.ErrorMessage>
          {error}
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  )
}

export default TextInput

TextInput.defaultProps = {
  placeholder: '',
  w: '95%',
  size: 'lg',
  variant: 'underlined',
  type: 'text',
  maxW: '400px',
  borderColor: 'primary.700',
  focusOutlineColor: 'primary.700',
  placeholderTextColor: StaticColors.black,
  formLabel: ''
}
