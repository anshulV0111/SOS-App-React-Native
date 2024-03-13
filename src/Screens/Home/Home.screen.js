import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  PermissionsAndroid,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { useAppTheme } from '@/Theme-Hooks'

import CustomButton from '@/Components/UI-Kit/CustomButton'
import { SNACKBAR_TYPE } from '@/Utils/constants'
import { Box, Center, Heading, VStack, useTheme } from 'native-base'
import { handleShowToast } from '@/Utils/helpers/toast.helpers'
import SendSMS from 'react-native-sms'
import UserIcon from '@/Components/UI-Kit/Icons/iconComponents/UserIcon'
import { setContacts } from '@/Store/redux/Auth/Auth.slice'
// import { useFormik } from 'formik'
// import * as yup from 'yup'
import Geolocation from '@react-native-community/geolocation'
import SmsAndroid from 'react-native-get-sms-android'
import Contacts from 'react-native-contacts'
import SelectFullScreenPopUp from '@/Components/Molecules/SelectFullScreenPopUp'
import ListItem from '@/Components/UI-Kit/ListItem'
// import debounce from 'lodash/debounce'
import PencilIcon from '@/Components/UI-Kit/Icons/iconComponents/PencilIcon'
import RNShake from 'react-native-shake'
import VIForegroundService from '@voximplant/react-native-foreground-service'

import SOSIcon from '@/Components/UI-Kit/Icons/iconComponents/SOSIcon'
import StaticColors from '@/Theme/static-colors'

const message = 'Hey I need your help this is my location'
// const howToLocate = 'On your Android phone or tablet, open the Google Maps app Maps.In the search box, enter your coordinates'
let flag = 0
const Home = () => {
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...')
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...')
  const [
    locationStatus,
    setLocationStatus
  ] = useState('')
  const [foreground, setForeground] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    createNotiChannel()
  })

  const createNotiChannel = async () => {
    const channelConfig = {
      id: 'channelId',
      name: 'Channel name',
      description: 'Channel description',
      enableVibration: false
    }
    await VIForegroundService.getInstance().createNotificationChannel(channelConfig)
  }

  const startForegroundService = async () => {
    const notificationConfig = {
      channelId: 'channelId',
      id: 3456,
      title: 'Title',
      text: 'Some text',
      icon: 'ic_icon',
      button: 'Some text'
    }
    try {
      await VIForegroundService.getInstance().startService(notificationConfig)
      console.log('started')
      setForeground(true)
      handleShowToast({
        // title: 'Account verified',
        status: SNACKBAR_TYPE.success,
        description: 'Foreground Mode is On!'
      })
      subscription.current = RNShake.addListener(() => {
        // Your code here...
        console.log('I am working')
        if (contacts.length && currentLatitude) {
          sendSMS()
        }

        // sendSMSManually()
      })
    } catch (e) {
      console.error(e)
      console.log('error' + e)
    }
  }

  const stopForegroundService = async () => {
    await VIForegroundService.getInstance().stopService()
    console.log('stopped')
    setForeground(false)
    handleShowToast({
      // title: 'Account verified',
      status: SNACKBAR_TYPE.success,
      description: 'Foreground Mode is Of!'
    })
  }

  const {
    Fonts,
    Gutters,
    Layout
  } = useAppTheme()
  const { colors } = useTheme()
  const { contacts } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const [smsPermission, setSMSPermission] = useState(false)
  const [showMultiSelect, setShowMultiSelect] = useState(false)
  const [selected, setSelected] = useState([])
  const [contactsList, setContactsList] = useState([])

  const watchID = useRef()
  const subscription = useRef()

  useEffect(() => {
    if (flag === 0 && currentLongitude !== '...' && currentLatitude !== '...') {
      subscription.current = RNShake.addListener(() => {
        // Your code here...
        sendSMSManually()

        flag = 1
      })
    }
  }, [currentLongitude, currentLatitude])

  useEffect(() => {
    console.log('Mount')
    if (currentLongitude === '...') {
      requestLocationPermission()
    }

    return () => {
      Geolocation.clearWatch(watchID.current)
      // subscription?.current?.remove()
    }
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

  // const debouncedHandleSearch = useCallback(debounce(onSearch, 500), [])

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
        console.log('You can use the contacts' + granted)
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

  const requestSMSPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'Send SMS Permission',
          message:
            'Cool Photo App needs access to SMS',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the sms')
        setSMSPermission(true)
      } else {
        console.log('sms permission denied')
        setSMSPermission(false)
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location'
        }
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // To Check, If Permission is granted
        getOneTimeLocation()
        subscribeLocationLocation()
        requestSMSPermission()
      } else {
        setLocationStatus('Permission Denied')
      }
    } catch (err) {
      console.warn(err)
    }
  }

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...')
    Geolocation.getCurrentPosition(
      // Will give you the current location
      (position) => {
        setLocationStatus('You are Here')

        // getting the Longitude from the location json
        const currentLongitude =
          JSON.stringify(position.coords.longitude)

        // getting the Latitude from the location json
        const currentLatitude =
          JSON.stringify(position.coords.latitude)

        // Setting Longitude state
        setCurrentLongitude(currentLongitude)

        // Setting Longitude state
        setCurrentLatitude(currentLatitude)
      },
      (error) => {
        setLocationStatus(error.message)
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      }
    )
  }

  const subscribeLocationLocation = () => {
    watchID.current = Geolocation.watchPosition(
      (position) => {
        // Will give you the location on location change

        setLocationStatus('You are Here')
        console.log(position)

        // getting the Longitude from the location json
        const currentLongitude =
          JSON.stringify(position.coords.longitude)

        // getting the Latitude from the location json
        const currentLatitude =
          JSON.stringify(position.coords.latitude)

        // Setting Longitude state
        setCurrentLongitude(currentLongitude)

        // Setting Latitude state
        setCurrentLatitude(currentLatitude)
      },
      (error) => {
        setLocationStatus(error.message)
      },
      {
        enableHighAccuracy: false,
        maximumAge: 20000
      }
    )
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

  // const contactFormSchema = yup.object({
  //   contact1: yup
  //     .string()
  //     .label(t('Contact 1'))
  //     .min(10, (props) =>
  //       t('mustbeAtleastCharacters', { ...props, minNumber: 10 })
  //     )
  //     .max(10, (props) =>
  //       t('cannotExceedCharacters', { ...props, maxNumber: 10 })
  //     )
  //     .required((props) => t('isRequired', props)),
  //   contact2: yup
  //     .string()
  //     .label(t('Contact 2'))
  //     .min(10, (props) =>
  //       t('mustbeAtleastCharacters', { ...props, minNumber: 10 })
  //     )
  //     .max(10, (props) =>
  //       t('cannotExceedCharacters', { ...props, maxNumber: 10 })
  //     )
  //     .required((props) => t('isRequired', props))

  // })

  // const { handleSubmit, values, handleChange, errors, resetForm, touched } = useFormik({
  //   initialValues: {
  //     contact1: '',
  //     contact2: ''
  //   },
  //   validationSchema: contactFormSchema,
  //   onSubmit: async (values) => {
  //     console.log('Login Form Submit ===== ', values)
  //     dispatch(setContacts(values))
  //     resetForm()
  //   }
  // })

  // const sendSMS = () => {
  //   SendSMS.send({
  //     body: `${message} : ${locationStatus} "http://www.google.com/maps/place/${currentLatitude},${currentLongitude}"`,
  //     recipients: [`+91 ${contacts.contact1}`, `+91 ${contacts.contact2}`],
  //     successTypes: ['sent', 'queued'],
  //     allowAndroidSendWithoutReadPermission: true
  //   }, (completed, cancelled, error) => {
  //     if (completed) {
  //       handleShowToast({
  //         // title: 'Account verified',
  //         status: SNACKBAR_TYPE.success,
  //         description: 'SMS sent successfully'
  //       })
  //     }
  //     console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error)
  //   })
  // }

  const sendSMSManually = (latitude, longitude) => {
    SendSMS.send({
      body: `${message} : "http://www.google.com/maps/place/${currentLatitude !== '...' ? currentLatitude : latitude},${currentLongitude !== '...' ? currentLongitude : longitude}"`,
      recipients: [contacts[0].value, contacts[1].value],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true
    }, (completed, cancelled, error) => {
      if (completed) {
        handleShowToast({
          // title: 'Account verified',
          status: SNACKBAR_TYPE.success,
          description: 'SMS sent successfully'
        })
      }
      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error)
    })
  }

  const sendSMS = () => {
    // const phoneNumbers = {
    //   addressList: [`+91 ${contacts[0].value}`, `+91 ${contacts[1].value}`]
    // }

    // SmsAndroid.autoSend(
    //   JSON.stringify(phoneNumbers),
    //   `${message} : ${locationStatus} "http://www.google.com/maps/place/${currentLatitude},${currentLongitude}"`,
    //   (fail) => {
    //     console.log('fail', fail)
    //     handleShowToast({
    //       // title: 'Account verified',
    //       status: SNACKBAR_TYPE.error,
    //       description: 'There was a problem'
    //     })
    //   },
    //   (success) => {
    //     handleShowToast({
    //       // title: 'Account verified',
    //       status: SNACKBAR_TYPE.success,
    //       description: 'SMS sent successfully'
    //     })
    //   }
    // )

    const phoneNumber1 = {
      addressList: [`${contacts[0].value}`]
    }
    const phoneNumber2 = {
      addressList: [`${contacts[1].value}`]
    }

    SmsAndroid.autoSend(
      JSON.stringify(phoneNumber1),
      `${message} : "http://www.google.com/maps/place/${currentLatitude},${currentLongitude}"`,
      (fail) => {
        console.log('fail', fail)
        handleShowToast({
          // title: 'Account verified',
          status: SNACKBAR_TYPE.error,
          description: 'There was a problem' + fail
        })
      },
      (success) => {
        handleShowToast({
          // title: 'Account verified',
          status: SNACKBAR_TYPE.success,
          description: 'SMS sent successfully'
        })
      }
    )

    SmsAndroid.autoSend(
      JSON.stringify(phoneNumber2),
      `${message} :  "http://www.google.com/maps/place/${currentLatitude},${currentLongitude}"`,
      (fail) => {
        console.log('fail', fail)
        handleShowToast({
          // title: 'Account verified',
          status: SNACKBAR_TYPE.error,
          description: 'There was a problem' + fail
        })
      },
      (success) => {
        handleShowToast({
          // title: 'Account verified',
          status: SNACKBAR_TYPE.success,
          description: 'SMS sent successfully'
        })
      }
    )
  }

  const resetContacts = () => {
    dispatch(setContacts([]))
  }

  return (
    <ScrollView
      style={Layout.fill}
      // contentContainerStyle={[
      //   Layout.fullSize,
      //   Layout.fill,
      //   Layout.colCenter,
      //   Layout.scrollSpaceBetween
      // ]}
    >
      <View
        style={[
          Layout.fill,
          Layout.justifyContentBetween,
          Layout.alignItemsStart,
          Layout.fullWidth,
          Gutters.regularHPadding
        ]}
      >
        {
          smsPermission
            ? contacts.length
              ? (
                <View style={{ width: '100%' }}>
                  <Text style={[{ fontSize: 20, fontWeight: 800 }, { color: colors.secondaryText, alignSelf: 'center', marginBottom: 10 }]}>What happend?</Text>
                  <Text
                    style={[Fonts.textBold, Fonts.textRegular, Gutters.regularBMargin, { color: colors.secondaryText, alignSelf: 'center' }]}
                  >
                    {t('Press button if you need help!')}
                  </Text>
                  {
                locationStatus === 'Getting Location ...'
                  ? <Center style={{ marginTop: 10, marginBottom: 10 }}><ActivityIndicator size='large' /></Center>
                  : (
                    <View style={{ justifyContent: 'center' }}>
                      {
                      locationStatus !== '...' && currentLongitude !== '...' && currentLatitude !== '...'
                        ? (
                          <>
                            <View style={{ width: 200, marginTop: 10, marginBottom: 0, alignSelf: 'center' }}>
                              <TouchableOpacity onPress={sendSMS} style={{ marginBottom: 10 }}>
                                <SOSIcon />
                              </TouchableOpacity>
                              {/* <View style={{ marginTop: 10, marginLeft: 20 }}>
                                <CustomButton
                                  value='Send manually'
                                  onPress={sendSMSManually}
                                />
                              </View>
                              <View style={{ marginTop: 10, marginLeft: 20 }}>
                                <CustomButton
                                  value={foreground ? 'Stop Foreground Mode' : 'Start Foreground Mode'}
                                  onPress={foreground ? stopForegroundService : startForegroundService}
                                />
                              </View> */}
                            </View>

                            <View style={styles.container}>
                              <TouchableOpacity
                                style={[styles.card]}
                                onPress={sendSMSManually}
                              >
                                <Text style={{ color: StaticColors.red, fontWeight: 600 }}>Send manually</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={[styles.card]}
                                onPress={foreground ? stopForegroundService : startForegroundService}

                              >
                                <Text style={{ color: StaticColors.red, fontWeight: 600 }}>{foreground ? 'Stop Foreground Mode' : 'Start Foreground Mode'}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={[styles.card]}
                                onPress={resetContacts}
                              >
                                <Text style={{ color: StaticColors.red, fontWeight: 600 }}>Reset contacts</Text>
                              </TouchableOpacity>
                            </View>

                          </>
                          )
                        : (
                          <View style={styles.container}>
                            <TouchableOpacity
                              style={[styles.card]}
                              onPress={getOneTimeLocation}
                            >
                              <Text style={{ color: StaticColors.red, fontWeight: 600 }}>Refresh Location</Text>
                            </TouchableOpacity>
                          </View>
                          )

                    }
                    </View>
                    )
                  }
                </View>
                )
              : (
                <View style={{ width: '100%' }}>

                  <Text
                    style={[Fonts.textBold, Fonts.textRegular, Gutters.regularBMargin, { color: colors.secondaryText, alignSelf: 'center' }]}
                  >
                    {t('Step1: Click below to Add your two emergency contacts!')}
                  </Text>
                  <Center w='100%'>
                    <Box safeArea p='2' py='8' w='90%' maxW='290'>

                      {/* <Heading
                        size='lg' fontWeight='600' color='coolGray.800' _dark={{
                          color: 'warmGray.50'
                        }}
                      >
                        No need to enter +91
                      </Heading> */}

                      <VStack space={3} mt='1'>
                        {/* <TextInput
                          w='100%'
                          formLabel='Contact1'
                          value={values.contact1}
                          placeholder='Enter your contact1'
                          handleChange={handleChange('contact1')}
                          error={touched.contact1 && errors.contact1}
                          InputLeftElement={<UserIcon />}
                          keyboardType='numeric'
                        />

                        <TextInput
                          w='100%'
                          type='contact2'
                          formLabel='Contact2'
                          value={values.contact2}
                          placeholder='Enter your contact2'
                          handleChange={handleChange('contact2')}
                          error={touched.contact2 && errors.contact2}
                          InputLeftElement={<UserIcon />}
                          keyboardType='numeric'
                        /> */}

                        <CustomButton
                          w='100%'
                          value={selected.length < 2 ? 'Add Contacts' : 'Next'}
                          onPress={() => {
                            if (selected.length < 2) {
                              setShowMultiSelect(true)
                              requestContactsPermission()
                            } else {
                              dispatch(setContacts(selected))
                              setSelected([])
                            }
                          }}
                        />
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
                                  onPress={() => { setShowMultiSelect(true) }}
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
                )
            : (
              <View>
                <Center w='100%'>
                  <Box safeArea p='2' py='8' w='90%' maxW='290'>
                    <Heading
                      size='lg' fontWeight='600' color='coolGray.800' _dark={{
                        color: 'warmGray.50'
                      }}
                    >
                      Please turn on SMS and location Permissions of the App
                    </Heading>
                  </Box>
                </Center>
              </View>
              )
        }
        <SelectFullScreenPopUp
          showModal={showMultiSelect}
          handleModalClose={() => setShowMultiSelect(false)}
          headerHeading='Select Contacts'
          list={contactsList}
          isChecked={isCheckedHandler}
          handleItemSelect={handleItemSelect}
          keyProp='label'
          search
          searchHandler={onSearch}
          t={t}
          rightText='Cancel All'
          onRightPress={() => {
            setSelected([])
            setShowMultiSelect(false)
          }}
        />
      </View>
    </ScrollView>
  )
}
export default Home

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    width: 290,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center'
  },
  card: {
    height: 130,
    width: 130,
    borderRadius: 4,
    backgroundColor: '#F5F5FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 5
  }
})
