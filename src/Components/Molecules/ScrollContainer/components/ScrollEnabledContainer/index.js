import React from 'react'
import { RefreshControl, SafeAreaView, ScrollView } from 'react-native'

const ScrollEnabledContainer = ({
  rootStyle,
  refreshing,
  onRefresh,
  children
}) => {
  return (
    <SafeAreaView style={rootStyle}>
      <ScrollView
        style={{ width: '100%' }}
        refreshControl={
          refreshing !== null && onRefresh !== null
            ? <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            : undefined
        }
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScrollEnabledContainer
