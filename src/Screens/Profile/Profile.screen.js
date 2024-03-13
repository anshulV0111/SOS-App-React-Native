import { View, PermissionsAndroid } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Box, Center, Heading, VStack, useTheme } from 'native-base'
import CustomButton from '@/Components/UI-Kit/CustomButton'
import ListItem from '@/Components/UI-Kit/ListItem'
import { useDispatch, useSelector } from 'react-redux'
import Contacts from 'react-native-contacts'
import debounce from 'lodash/debounce'
import { useTranslation } from 'react-i18next'
import SelectFullScreenPopUp from '@/Components/Molecules/SelectFullScreenPopUp'
import UserIcon from '@/Components/UI-Kit/Icons/iconComponents/UserIcon'
import { setContacts } from '@/Store/redux/Auth/Auth.slice'
import PencilIcon from '@/Components/UI-Kit/Icons/iconComponents/PencilIcon'

const ProfileScreen = () => {
  const { contacts } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const [showMultiSelect, setShowMultiSelect] = useState(false)
  const [selected, setSelected] = useState([])
  const [contactsList, setContactsList] = useState([])
  const { t } = useTranslation()
  const { colors } = useTheme()

  useEffect(() => {
    setSelected(contacts)
  }, [])

  const onSearch = (text) => {
    // eslint-disable-next-line
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m
    if (text === '' || text === null) {
      getAllContacts()
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text).then(contacts => {
        if (contacts.length) {
          let contactTemp = []
          contactTemp = contacts.map((item) => {
            if (item.phoneNumbers?.[0]?.label === 'mobile') {
              return {
                id: item.recordID,
                label: `${item.displayName}`,
                value: item.phoneNumbers?.[0].number
              }
            } else {
              return {
                id: item.recordID,
                label: `${item.displayName}`,
                value: ''
              }
            }
          })
          setContactsList(contactTemp)
        }
      })
    } else {
      Contacts.getContactsMatchingString(text).then(contacts => {
        if (contacts.length) {
          let contactTemp = []
          contactTemp = contacts.map((item) => {
            if (item.phoneNumbers?.[0]?.label === 'mobile') {
              return {
                id: item.recordID,
                label: `${item.displayName}`,
                value: item.phoneNumbers?.[0].number
              }
            } else {
              return {
                id: item.recordID,
                label: `${item.displayName}`,
                value: ''
              }
            }
          })
          setContactsList(contactTemp)
        }
      })
    }
  }

  const debouncedHandleSearch = useCallback(debounce(onSearch, 20), [])

  const getAllContacts = async () => {
    try {
      const contacts = await Contacts.getAll()
      if (contacts.length) {
        let contactTemp = []
        contactTemp = contacts.slice(0, 60).map((item) => {
          if (item.phoneNumbers?.[0]?.label === 'mobile') {
            return {
              id: item.recordID,
              label: `${item.displayName}`,
              value: item.phoneNumbers?.[0].number
            }
          } else {
            return {
              id: item.recordID,
              label: `${item.displayName}`,
              value: ''
            }
          }
        })
        // console.log('contact+++s Listtttt', contactsList[0])
        setContactsList(contactTemp)
      }
    } catch (err) {
      console.log('something went wrong' + err)
    }
  }

  const requestContactsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal'
      })

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the sms222222' + granted)
        // setSMSPermission(true)
        await getAllContacts()
      } else {
        console.log('contacts permission denied' + granted)
        // setSMSPermission(false)
      }
      // .then((res) => {
      //   console.log('Permission: ', res)
      //   Contacts.getAll()
      //     .then((contacts) => {
      //     // work with contacts
      //       console.log(contacts)
      //     })
      //     .catch((e) => {
      //       console.log(e)
      //     })
      // })
    } catch (err) {
      console.warn(err)
    }
  }

  const isCheckedHandler = (item) => {
    return selected.map((item) => item.value).includes(item.value)
  }

  const handleItemSelect = (item) => {
    if (selected.map((item) => item.value).includes(item.value)) {
      setSelected(selected.filter((val) => val.value !== item.value))
    } else {
      setSelected([...selected, item])
      if (selected.length === 1) setShowMultiSelect(false)
    }
  }

  return (
    <View style={{ margin: 10 }}>
      <View style={{ width: '100%' }}>
        <Center w='100%'>
          <Box safeArea p='2' py='8' w='90%' maxW='290'>
            <Heading
              size='lg' fontWeight='600' style={{ color: colors.secondaryText }}
            >
              Saved Contacts
            </Heading>

            <VStack space={3} mt='5'>

              {
              selected?.[0]?.value !== contacts[0].value || selected?.[1]?.value !== contacts[1].value
                ? <CustomButton
                    w='100%'
                    value={selected.length < 2 ? 'Add Contacts' : 'Submit Contacts'}
                    onPress={() => {
                      if (selected.length < 2) {
                        requestContactsPermission()
                        setShowMultiSelect(true)
                      } else {
                        dispatch(setContacts(selected))
                      }
                    }}
                  />
                : <></>
              }
              {
                        selected.length
                          ? (
                            <View style={{
                              alignItems: 'center',
                              width: '100%'
                            }}
                            >
                              {
                            selected.map((item) => {
                              return (
                                <ListItem
                                  rightIcon={PencilIcon}
                                  key={item.id}
                                  onPress={() => {
                                    requestContactsPermission()
                                    setShowMultiSelect(true)
                                  }}
                                  title={item.label}
                                  description={item.value}
                                  leftIcon={UserIcon}
                                  style={{
                                    marginTop: 10
                                  }}
                                />
                              )
                            })
                          }
                            </View>
                            )
                          : <></>
                        }
            </VStack>
          </Box>
        </Center>
      </View>
      <SelectFullScreenPopUp
        showModal={showMultiSelect}
        handleModalClose={() => setShowMultiSelect(false)}
        headerHeading='Select Contacts'
        list={contactsList}
        isChecked={isCheckedHandler}
        handleItemSelect={handleItemSelect}
        keyProp='label'
        search
        searchHandler={debouncedHandleSearch}
        t={t}
        rightText='Cancel All'
        onRightPress={() => {
          setSelected([])
          setShowMultiSelect(false)
        }}
      />
    </View>
  )
}

export default ProfileScreen
