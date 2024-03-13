import React from 'react'
import { Box, FormControl, useTheme, TextArea } from 'native-base'
import StaticColors from '@/Theme/static-colors'

const CustomTextArea = ({
  value,
  handleChange,
  placeholder,
  w,
  variant,
  maxW,
  error,
  style,
  size,
  borderColor,
  placeholderTextColor,
  focusOutlineColor,
  formLabel,
  totalLines,
  ...otherProps
}) => {
  const { colors } = useTheme()

  return (
    <Box alignItems='center'>
      <FormControl isInvalid={error} alignItems='center'>
        {
          formLabel
            ? <FormControl.Label>{formLabel}</FormControl.Label>
            : <></>
        }
        <TextArea
          style={style}
          value={value}
          focusOutlineColor={error ? colors.red : focusOutlineColor}
          borderColor={error ? colors.red : borderColor}
          onChangeText={handleChange}
          placeholder={placeholder}
          w={w}
          maxW={maxW}
          variant={variant}
          placeholderTextColor={placeholderTextColor}
          totalLines={totalLines}
          size={size}
          {...otherProps}
        />
        <FormControl.ErrorMessage>
          {error}
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  )
}

export default CustomTextArea

CustomTextArea.defaultProps = {
  placeholder: '',
  w: '95%',
  variant: 'underlined',
  type: 'text',
  maxW: '400px',
  borderColor: 'primary.700',
  focusOutlineColor: 'primary.700',
  placeholderTextColor: StaticColors.black,
  formLabel: '',
  totalLines: 5,
  size: 'md'
}
