import React from 'react'
import { TouchableOpacity, TextInput, View } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { styles } from './DateTimeInputPicker.styles'
import StaticColors from '@/Theme/static-colors'
import { FormControl } from 'native-base'

const CustomDateTimeInputPicker = ({
  handleDateTimePicker,
  isDateTimePickerVisible,
  setDateTimePickerValue,
  placeholder,
  error,
  label,
  value,
  maxDate,
  mode,
  EndIcon,
  iconBackgroundColor,
  iconBackgroundHeight,
  inputHeight,
  placeholderTextColor,
  backgroundColor,
  is24Hour,
  handleCancel
}) => {
  return (
    <View style={styles.root}>
      <FormControl isInvalid={error} alignItems='center'>
        {
          label
            ? <FormControl.Label>{label}</FormControl.Label>
            : <></>
        }

        <TouchableOpacity onPress={handleDateTimePicker}>
          <DateTimePicker
            isVisible={isDateTimePickerVisible}
            mode={mode}
            onConfirm={setDateTimePickerValue}
            onCancel={handleCancel}
            maximumDate={maxDate}
            is24Hour={is24Hour}
          />
          <TextInput
            onPressIn={handleDateTimePicker} placeholder={placeholder} mode='flat' editable={false}
            style={styles.input({ height: inputHeight || 50, backgroundColor })} value={value} placeholderTextColor={placeholderTextColor}
          />
          {
            EndIcon && (
              <TouchableOpacity
                style={styles.inputEndIconContainer({
                  backgroundColor: iconBackgroundColor,
                  height: iconBackgroundHeight
                })} onPress={handleDateTimePicker}
              >
                {EndIcon}
              </TouchableOpacity>
            )
          }
          <FormControl.ErrorMessage>
            {error}
          </FormControl.ErrorMessage>
        </TouchableOpacity>
      </FormControl>
    </View>
  )
}

export default CustomDateTimeInputPicker

CustomDateTimeInputPicker.defaultProps = {
  mode: 'date',
  iconBackgroundColor: StaticColors.darkBlue,
  iconBackgroundHeight: 50,
  inputHeight: 50,
  placeholderTextColor: StaticColors.black,
  backgroundColor: StaticColors.white,
  is24Hour: true
}
