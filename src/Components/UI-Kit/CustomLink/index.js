import { Link } from 'native-base'
import React from 'react'

const CustomLink = ({
  href,
  children,
  isUnderlined,
  onPress,
  _text,
  ...otherProps
}) => {
  return (
    <Link
      href={href}
      isUnderlined={isUnderlined}
      onPress={onPress}
      _text={
        _text || {
          fontSize: 'xs',
          fontWeight: '500',
          color: 'indigo.500'
        }
      }
      {...otherProps}
    >
      {children}
    </Link>

  )
}

export default CustomLink

CustomLink.defaultProps = {
  href: '',
  isUnderlined: true
}
