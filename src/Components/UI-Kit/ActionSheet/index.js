import { Actionsheet } from 'native-base'
import React from 'react'

const ActionSheet = ({
  isOpen,
  onClose,
  sheetList,
  ...otherProps
}) => {
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} {...otherProps}>
      <Actionsheet.Content>
        {
          sheetList.map((item) => (
            <Actionsheet.Item
              key={item.id}
              startIcon={item.startIcon}
              onPress={item.onPress}
              isDisabled={item.isDisabled}
              // {...item}
            >{item.label}
            </Actionsheet.Item>
          ))
        }
      </Actionsheet.Content>
    </Actionsheet>
  )
}

export default ActionSheet
