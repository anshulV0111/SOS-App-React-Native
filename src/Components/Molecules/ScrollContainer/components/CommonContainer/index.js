import AppLoader from '@/Components/UI-Kit/AppLoader'
import React from 'react'
import ScrollEnabledContainer from '../ScrollEnabledContainer'

const CommonContainer = ({
  children,
  rootStyle,
  scroll,
  loading,
  refreshing,
  onRefresh
}) => {
  return (
    loading
      ? (
        <AppLoader loading={loading} />
        )
      : (
          scroll
            ? (
              <ScrollEnabledContainer
                rootStyle={rootStyle}
                refreshing={refreshing}
                onRefresh={onRefresh}
              >
                {children}
              </ScrollEnabledContainer>
              )
            : (
                children
              )
        )

  )
}

export default CommonContainer
