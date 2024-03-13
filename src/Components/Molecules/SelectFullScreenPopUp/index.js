import React from 'react'
import { View, Dimensions, ScrollView } from 'react-native'
import TextInput from '@/Components/UI-Kit/TextInput'
import { styles } from './SelectFullScreenPopUp.styles'
import CustomModal from '@/Components/UI-Kit/CustomModal'
import ListItem from '@/Components/UI-Kit/ListItem'

const windowHeight = Dimensions.get('window').height - 120

const SelectFullScreenPopUp = ({
  handleModalClose,
  showModal,
  headerHeading,
  list,
  isChecked,
  search,
  handleItemSelect,
  searchHandler,
  searchValue,
  keyProp,
  t,
  rightText,
  onRightPress
}) => {
  return (
    <CustomModal
      showModal={showModal}
      handleModalClose={handleModalClose}
      fullscreen
      headerHeading={headerHeading}
      rightText={rightText}
      onRightPress={onRightPress}
    >
      <View>
        <View>
          {
          search && searchHandler
            ? (
              <TextInput
                placeholder={t('search')}
                handleChange={(text) => searchHandler(text)}
                variant='rounded'
              />
              )
            : <></>
          }
          <View style={styles.headerLine} />
        </View>
        <ScrollView style={{ height: windowHeight }}>
          <View style={styles.container}>
            {
          list.map((item, index) => (
            <ListItem
              type='checked'
              checked={isChecked(item)}
              style={{ marginTop: 10 }}
              key={index}
              title={item[keyProp]}
              rightIcon
              onPress={
                   () => handleItemSelect(item)
              }
            />
          ))
        }
          </View>
        </ScrollView>
      </View>
    </CustomModal>
  )
}

export default SelectFullScreenPopUp
