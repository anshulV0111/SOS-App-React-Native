import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { styles } from '../ListAccordian.styles'

const borderRadiusEval = (arr, item) => {
  if (arr.indexOf(item) === 0) return styles.listItemFirst
  else if (arr.indexOf(item) === arr.length - 1) return styles.listItemLast
  else return styles.listItem
}

const RenderList = ({ listItems, multiple }) => {
  const { t } = useTranslation()

  return (
    listItems && listItems.length !== 0
      ? multiple
        ? listItems.map((block) => (
          <View
            style={styles.block}
            key={listItems.indexOf(block)}
          >
            {block.map((item) => (
              <View
                key={item.id}
                style={borderRadiusEval(block, item)}
              >
                <Text
                  style={styles.listLabel}
                >
                  {item.label}
                </Text>
                <Text
                  style={styles.listValue}
                >
                  {item.value}
                </Text>
              </View>
            ))}
          </View>
        ))
        : (listItems.map((item) => (
          <View
            key={item.id}
            style={borderRadiusEval(listItems, item)}
          >
            <Text
              style={styles.listLabel}
            >
              {item.label}
            </Text>
            <Text
              style={styles.listValue}
            >
              {item.value}
            </Text>
          </View>
          )))

      : (
        <View
          style={styles.nolistItem}
        >
          <Text
            style={styles.listLabel}
          >
            {t('nodataFound')}
          </Text>
        </View>
        )
  )
}

export default RenderList
