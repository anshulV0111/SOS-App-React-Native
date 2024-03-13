import { Modal, View } from 'react-native'
import React from 'react'
import { styles } from '../../CustomModal.styles'
import Header from '@/Components/Layouts/Header'

const FullScreenModal = ({
  showModal,
  handleModalClose,
  children,
  animationType,
  customFullScreenStyle,
  transparent,
  headerHeading,
  onRightPress,
  rightText,
  ...otherProps
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={transparent}
      visible={showModal}
      onRequestClose={handleModalClose}
      {...otherProps}
    >
      <View style={[styles.fullScreenContainerStyle, customFullScreenStyle]}>
        {
          headerHeading
            ? <Header
                headerHeading={headerHeading}
                onBackPress={handleModalClose}
                variant='modal'
                onRightPress={onRightPress}
                rightText={rightText}
              />
            : <></>
        }
        {children}
      </View>
    </Modal>
  )
}

export default FullScreenModal
