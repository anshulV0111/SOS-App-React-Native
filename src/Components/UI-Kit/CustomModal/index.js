import React from 'react'
import FullScreenModal from './components/FullScreenModal'
import NativeBaseModal from './components/NativeBaseModal'

const CustomModal = ({
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
  fullscreen,
  animationPreset,
  customFullScreenStyle,
  transparent,
  headerHeading,
  onRightPress,
  rightText,
  ...otherProps
}) => {
  return (
    fullscreen
      ? (
        <FullScreenModal
          showModal={showModal}
          handleModalClose={handleModalClose}
          animationType={animationPreset}
          customFullScreenStyle={customFullScreenStyle}
          transparent={transparent}
          headerHeading={headerHeading}
          onRightPress={onRightPress}
          rightText={rightText}
          {...otherProps}
        >
          {children}
        </FullScreenModal>
        )
      : (
        <NativeBaseModal
          showModal={showModal}
          handleModalClose={handleModalClose}
          heading={heading}
          leftButtonText={leftButtonText}
          rightButtonText={rightButtonText}
          leftButtonHandler={leftButtonHandler}
          rightButtonHandler={rightButtonHandler}
          contentMaxWidth={contentMaxWidth}
          animationPreset={animationPreset}
          size={size}
          transparent={transparent}
          {...otherProps}
        >
          {children}
        </NativeBaseModal>
        )
  )
}

export default CustomModal

CustomModal.defaultProps = {
  showModal: false,
  handleModalClose: () => { },
  heading: '',
  leftButtonText: '',
  rightButtonText: '',
  leftButtonHandler: () => { },
  rightButtonHandler: () => { },
  contentMaxWidth: '400px',
  size: 'xl',
  animationPreset: 'fade',
  transparent: false,
  headerHeading: ''
}
