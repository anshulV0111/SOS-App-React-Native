import React from 'react'
import StaticColors from '@/Theme/static-colors'
import { View } from 'react-native'
import { List } from 'react-native-paper'
import RenderList from './RenderList'
import { styles } from './ListAccordian.styles'
import DownArrowIcon from '../Icons/iconComponents/DownArrowIcon'
import RightArrowIcon from '../Icons/iconComponents/RightArrowIcon'

const ListAccordian = ({
  title,
  onPress,
  leftIcon,
  listItems,
  description,
  expanded,
  style,
  multiple,
  ...otherProps
}) => {
  return (
    <View style={[styles.listAccordianRoot, style]}>
      <List.Accordion
        theme={{ colors: { background: StaticColors.transparent } }}
        style={styles.listAccordian}
        onPress={onPress}
        leftIcon={leftIcon}
        description={description}
        title={title}
        titleStyle={styles.titleStyle}
        expanded={expanded}
        right={props =>
          expanded
            ? <DownArrowIcon
                {...props}
                style={{
                  alignSelf: 'center',
                  marginRight: 10
                }}
              />
            : <RightArrowIcon
                {...props}
                style={{
                  alignSelf: 'center',
                  marginRight: 10
                }}
              />}
      >
        <RenderList multiple={multiple} listItems={listItems} />
      </List.Accordion>
    </View>
  )
}

export default ListAccordian

ListAccordian.defaultProps = {
  onPress: () => { },
  multiple: false
}
