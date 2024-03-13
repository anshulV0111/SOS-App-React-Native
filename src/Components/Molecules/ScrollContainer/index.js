import React from 'react'
import CommonContainer from './components/CommonContainer'

const ScrollContainer = ({
  children,
  rootStyle,
  scroll,
  loading,
  refreshing,
  onRefresh
}) => {
  return (
    <CommonContainer
      rootStyle={rootStyle}
      scroll={scroll}
      loading={loading}
      refreshing={refreshing}
      onRefresh={onRefresh}
    >
      {children}
    </CommonContainer>
  )
}

export default ScrollContainer

ScrollContainer.defaultProps = {
  rootStyle: undefined,
  scroll: true,
  loading: false,
  refreshing: null,
  onRefresh: null
}
