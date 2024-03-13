import React from 'react'
import CustomButton from '@/Components/UI-Kit/CustomButton'
import StaticColors from '@/Theme/static-colors'
import { Modal } from 'native-base'
import { Text, View } from 'react-native'
import { styles } from '../../CustomModal.styles'

const NativeBaseModal = ({
  showModal,
  handleModalClose,
  heading,
  leftButtonText,
  rightButtonText,
  leftButtonHandler,
  rightButtonHandler,
  contentMaxWidth,
  children,
  size,
  animationPreset,
  ...otherProps
}) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={handleModalClose}
      size={size}
      animationPreset={animationPreset}
      {...otherProps}
    >
      {
        children || (
          <Modal.Content maxWidth={contentMaxWidth}>
            <Modal.CloseButton />
            <View style={styles.headingContainer}>
              <Text style={styles.textStyle}>{heading}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton
                variant='ghost'
                colorScheme='blueGray'
                onPress={leftButtonHandler}
                w='30%'
                value={leftButtonText}
                textColor={StaticColors.black}
              />
              <CustomButton
                onPress={rightButtonHandler}
                w='30%'
                value={rightButtonText}
              />
            </View>

          </Modal.Content>
        )
      }
    </Modal>
  )
}

export default NativeBaseModal
