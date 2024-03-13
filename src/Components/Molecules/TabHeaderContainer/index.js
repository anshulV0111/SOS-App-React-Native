import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable'
import { styles } from './TabHeaderContainer.styles'

const TabHeaderContainer = ({ tabs, renderComponents }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].screenName)

  const Component = renderComponents.find((item) => (activeTab === item.screenName)).component

  return (
    <>
      <View style={styles.root}>
        {
          tabs.map((tab) => (
            <TouchableOpacity
              key={tab.label}
              onPress={() => setActiveTab(tab.screenName)}
              activeOpacity={1}
              style={styles.tabButtons}
            >
              <Animatable.Text duration={1000} style={styles.selectedTab({ activeTab, tab })} {...(activeTab === tab.screenName ? { animation: 'zoomIn' } : {})}>
                {tab.label}
              </Animatable.Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.bottomBorder} />
      <Component />
    </>
  )
}

export default TabHeaderContainer
