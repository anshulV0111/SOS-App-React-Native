import React from 'react'
import HomeHeader from './components/HomeHeader'
import DefaultHeader from './components/DefaultHeader'
import { useTheme } from 'native-base'
import { useTranslation } from 'react-i18next'
import ModalHeader from './components/ModalHeader'

const Header = ({
  variant = 'default',
  headerHeading,
  onBackPress,
  rightText,
  onRightPress
}) => {
  const { colors } = useTheme()
  const { t } = useTranslation()

  switch (variant) {
    case 'home':
      return (
        <HomeHeader colors={colors} t={t} />
      )
    case 'modal':
      return (
        <ModalHeader
          colors={colors}
          t={t}
          heading={headerHeading}
          onBackPress={onBackPress}
          rightText={rightText}
          onRightPress={onRightPress}
        />
      )
    default:
      return (
        <DefaultHeader heading={headerHeading} t={t} />
      )
  }
}

export default Header

Header.defaultProps = {
  variant: 'default',
  headerHeading: 'Heading',
  onBackPress: () => {},
  rightText: '',
  onRightPress: () => {}
}
