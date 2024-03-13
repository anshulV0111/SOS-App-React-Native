import React from 'react'
import { Box, CheckIcon, FormControl, Select, useTheme } from 'native-base'
import StaticColors from '@/Theme/static-colors'
// import StaticColors from '@/Theme/colors'

const CustomSelect = ({
  selectedValue,
  accessibilityLabel,
  placeholder,
  onValueChange,
  error,
  list,
  w,
  variant,
  size,
  selectedItemColor,
  _selectedItem,
  _Item,
  isDisabled,
  borderColor,
  focusOutlineColor,
  formLabel,
  ...otherProps
}) => {
  const { colors } = useTheme()
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
        <Select
          w={w}
          selectedValue={selectedValue}
          accessibilityLabel={accessibilityLabel}
          placeholder={placeholder}
          _selectedItem={
            _selectedItem ||
            {
              bg: 'primary.700',
              endIcon: <CheckIcon size='5' />
            }
          }
          mt={1}
          onValueChange={onValueChange}
          variant={variant}
          size={size}
          color={selectedItemColor}
          isDisabled={isDisabled}
          focusOutlineColor={error ? colors.red : focusOutlineColor}
          borderColor={error ? colors.red : borderColor}
          // _actionSheetContent={{
          //   backgroundColor: 'red'
          // }}
          // _item={{
          //   backgroundColor: 'red'
          // }}
          {...otherProps}
        >
          {
            list?.map((item) => {
              return (
                <Select.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              )
            })
          }
        </Select>

        <FormControl.ErrorMessage>
          {error}
        </FormControl.ErrorMessage>
      </FormControl>
    </Box>
  )
}

export default CustomSelect

CustomSelect.defaultProps = {
  placeholder: '',
  w: '95%',
  size: 'lg',
  variant: 'underlined',
  selectedItemColor: StaticColors.black,
  isDisabled: false,
  borderColor: 'primary.700',
  focusOutlineColor: 'primary.700',
  formLabel: ''
}
