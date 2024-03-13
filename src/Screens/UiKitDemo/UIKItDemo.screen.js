import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextInput from '@/Components/UI-Kit/TextInput'
import { Button, Stack, VStack } from 'native-base'
import UserIcon from '@/Components/UI-Kit/Icons/iconComponents/UserIcon'
import CustomButton from '@/Components/UI-Kit/CustomButton'
import SearchIcon from '@/Components/UI-Kit/Icons/iconComponents/SearchIcon'
import CustomSelect from '@/Components/UI-Kit/CustomSelect'
import CustomCheckBox from '@/Components/UI-Kit/CheckBox'
import CustomModal from '@/Components/UI-Kit/CustomModal'
import { SNACKBAR_PLACEMENT, SNACKBAR_TYPE } from '@/Utils/constants'
import CustomText from '@/Components/UI-Kit/CustomText'
import ActionSheet from '@/Components/UI-Kit/ActionSheet'
import CustomSwitch from '@/Components/UI-Kit/Switch'
import { handleShowToast } from '@/Utils/helpers/toast.helpers'
import CustomDateTimeInputPicker from '@/Components/UI-Kit/DateTimeInputPicker'
import StaticColors from '@/Theme/static-colors'
import moment from 'moment'
import CustomTextArea from '@/Components/UI-Kit/CustomTextArea'
import CustomLink from '@/Components/UI-Kit/CustomLink'
import ScrollContainer from '@/Components/Molecules/ScrollContainer'
import ListItem from '@/Components/UI-Kit/ListItem'
import ListAccordian from '@/Components/UI-Kit/ListAccordian'
import SelectFullScreenPopUp from '@/Components/Molecules/SelectFullScreenPopUp'
import { useTranslation } from 'react-i18next'

const ComponentWithError = () => {
  useEffect(() => {
    throw new Error('This is a test error thrown by ComponentWithError.')
  }, [])

  return null
}

const SELECT_LIST = [
  {
    id: 1,
    label: 'First',
    value: 'first'
  },
  {
    id: 2,
    label: 'Second',
    value: 'second'
  },
  {
    id: 3,
    label: 'Third',
    value: 'third'
  }
]

const basicInformationList = [
  {
    id: 1,
    label: 'Username',
    value: 'Berhad'
  },
  {
    id: 2,
    label: 'Username',
    value: 'Berhad'
  },
  {
    id: 3,
    label: 'Username',
    value: 'Berhad'
  },
  {
    id: 4,
    label: 'Username',
    value: '----'
  },
  {
    id: 5,
    label: 'Username',
    value: 'Berhad'
  },
  {
    id: 6,
    label: 'Username',
    value: 'Berhad'
  },
  {
    id: 7,
    label: 'Username',
    value: 'Berhad'
  }
]

const subjectList = [
  {
    id: 1,
    label: 'Sub 1',
    value: 1
  },
  {
    id: 2,
    label: 'Sub 2',
    value: 2
  },
  {
    id: 3,
    label: 'Sub 3',
    value: 3
  },
  {
    id: 4,
    label: 'Sub 4',
    value: 4
  },
  {
    id: 5,
    label: 'Sub 5',
    value: 5
  }
]

const UiKitDemo = () => {
  const [textValue, setTextValue] = useState('')
  const [service, setService] = useState('')
  const [checkbox, setCheckBox] = useState(true)

  const [showModal, setShowModal] = useState(false)
  const [showFull, setShowFullsModal] = useState(false)
  const [showActionSheet, setShowActionSheet] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false)
  const [date, setDate] = useState('')
  const [isErrorComponentVisible, setIsErrorComponentVisible] = useState(false)
  const [expandAccordian, setExpandAccordian] = useState(false)
  const [showMultiSelect, setShowMultiSelect] = useState(false)
  const [selected, setSelected] = useState([])

  const { t } = useTranslation()

  // const { handleShowToast } = useCustomToast()

  const onValueChange = () => {
    setCheckBox(!checkbox)
  }

  const handleDateTimePickerCancel = () => {
    setDateTimePickerVisibility(false)
  }

  const handleDateTimePicker = () => {
    setDateTimePickerVisibility(true)
  }

  const getAndSetDateTimePickerValue = (value) => {
    setDate(moment(value).format())
    handleDateTimePickerCancel()
  }

  const sheetList = [
    {
      id: 1,
      label: 'Share',
      startIcon: null,
      onPress: () => { console.log('share') },
      isDisabled: false
    },
    {
      id: 2,
      label: 'Add',
      startIcon: null,
      onPress: () => { },
      isDisabled: false

    },
    {
      id: 3,
      label: 'Fav',
      startIcon: <View><UserIcon /></View>,
      onPress: () => { },
      isDisabled: true

    }
  ]

  const myProfileList = [
    {
      id: 1,
      label: 'Info',
      description: 'View your basic info and other details',
      icon: UserIcon,
      onPress: () => { }
    },
    {
      id: 2,
      label: 'Employment',
      description: 'View your employment details',
      icon: UserIcon,
      onPress: () => { }
    },
    {
      id: 3,
      label: 'Training',
      description: 'View your training record details',
      icon: UserIcon,
      onPress: () => { }
    }
  ]

  const isCheckedHandler = (item) => {
    return selected.includes(item.value)
  }

  const handleItemSelect = (item) => {
    if (selected.includes(item.value)) {
      setSelected(selected.filter((val) => val !== item.value))
    } else {
      setSelected([...selected, item.value])
    }
  }

  return (
    <View style={{}}>
      <ScrollContainer loading={false}>
        <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>TextInput</Text>
        <Button onPress={() => setShowModal(true)}>Button</Button>
        <CustomModal
          showModal={showModal}
          handleModalClose={() => setShowModal(false)}
          heading='Are you sure you want to press okk?'
          leftButtonText='Cancel'
          rightButtonText='Ok'
          leftButtonHandler={() => setShowModal(false)}
          rightButtonHandler={() => setShowModal(false)}

        />
        <Stack space={4} w='100%' mx='auto' mb='20px'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800' }}>Default</Text>
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
            type='password'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
            type='password'
            error='This is a validation error'
          />
        </Stack>
        <Stack space={4} w='100%' mx='auto' mb='20px'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800', fontSize: 20 }}>Icons</Text>
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
            InputLeftElement={<UserIcon />}
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
            InputRightElement={<UserIcon />}
          />
        </Stack>
        <Stack space={4} w='100%' mx='auto'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800', fontSize: 20 }}>Variants</Text>
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
            variant='outline'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='filled'
            variant='filled'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='underlined'
            variant='underlined'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='unstyled'
            variant='unstyled'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='rounded'
            variant='rounded'
          />
        </Stack>
        <Stack space={4} w='100%' mx='auto' mb='20px'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800', fontSize: 20 }}>Sizes</Text>
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            size='xs'
            placeholder='xs Input'
            w='50%'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            size='sm'
            placeholder='sm Input'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            size='md'
            placeholder='md Input'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            size='lg'
            placeholder='lg Input'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            size='xl'
            placeholder='xl Input'
          />
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            size='2xl'
            placeholder='2xl Input'
          />
        </Stack>
        <Stack space={4} w='100%' mx='auto' mb='20px'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800', fontSize: 20 }}>Custom</Text>
          <TextInput
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
            variant='outline'
            style={{
              backgroundColor: 'lightblue',
              borderWidth: 2,
              borderColor: 'red',
              color: 'green'
            }}
            borderColor='red'
            // _focus={{
            //   backgroundColor: 'lightblue',
            //   borderWidth: 2,
            //   borderColor: 'red'
            // }}
            focusOutlineColor='red'
            placeholderTextColor='green'
          />
        </Stack>

        <Stack space={4} w='100%' mx='auto' mb='20px' alignItems='center'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800', fontSize: 24 }}>Button</Text>
          <CustomButton
            value='Submit'
            onPress={() => { }}
          />
          <CustomButton
            value='subtle'
            onPress={() => { }}
            variant='subtle'
          />
          <CustomButton
            value='outline'
            onPress={() => { }}
            variant='outline'
          />
          <CustomButton
            value='ghost'
            onPress={() => { }}
            variant='ghost'
          />
          <CustomButton
            value='unstyled'
            onPress={() => { }}
            variant='unstyled'
          />

          <CustomButton
            value='Submit'
            isLoading
          />
          <CustomButton
            value='Submit'
            isLoading
            isLoadingText='Submitting'
          />
          <CustomButton
            value='Disabled'
            isDisabled
          />
          <CustomButton
            value='xs'
            size='xs'
            w='40%'
          />
          <CustomButton
            value='sm'
            size='sm'
          />
          <CustomButton
            value='md'
            size='md'
          />
          <CustomButton
            value='lg'
            size='lg'
          />
          <CustomButton
            value='Submit'
            leftIcon={<View><SearchIcon /></View>}
          />
          <CustomButton
            value='Submit'
            endIcon={<View><SearchIcon /></View>}
          />
          <CustomButton
            value='Submit'
            style={{
              backgroundColor: 'red',
              borderRadius: 24,
              borderWidth: 2,
              borderColor: 'green'
            }}
            _text={{
              color: 'black'
            }}
          />
        </Stack>

        <Stack space={4} w='100%' mx='auto' mb='20px'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800', fontSize: 20 }}>Select</Text>
          <CustomSelect
            selectedValue={service}
            onValueChange={itemValue => setService(itemValue)}
            accessibilityLabel='Choose Service'
            placeholder='Choose Service'
            list={SELECT_LIST}
          />
          <CustomSelect
            selectedValue={service}
            onValueChange={itemValue => setService(itemValue)}
            accessibilityLabel='Choose Service'
            placeholder='Choose Service'
            list={SELECT_LIST}
            variant='outline'
          />
          <CustomSelect
            selectedValue={service}
            onValueChange={itemValue => setService(itemValue)}
            accessibilityLabel='Choose Service'
            placeholder='Choose Service'
            list={SELECT_LIST}
            variant='rounded'
            error='This is validation error'
          />
          <CustomSelect
            selectedValue={service}
            onValueChange={itemValue => setService(itemValue)}
            accessibilityLabel='Choose Service'
            placeholder='Choose Service'
            list={SELECT_LIST}
            variant='filled'
            w='50%'
          />
        </Stack>

        <Stack space={4} w='100%' mx='auto' mb='20px' alignItems='center'>
          <Text style={{ color: 'black', alignSelf: 'center', fontWeight: '800', fontSize: 20 }}>Checkbox</Text>
          <CustomCheckBox
            labelRight='Check'
            value={checkbox}
            onChange={onValueChange}
          />
          <CustomCheckBox
            labelLeft='Check'
            value={checkbox}
            onChange={onValueChange}
          />

        </Stack>
        <Stack space={4} style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Modal</Text>
          <CustomButton
            value='Basic Modal'
            onPress={() => setShowModal(true)}
          />
          <CustomButton
            value='Full Screen Modal'
            onPress={() => setShowFullsModal(true)}
          />
          <CustomModal
            showModal={showModal}
            heading='Are you sure?'
            leftButtonText='Cancel'
            rightButtonText='Ok'
            handleModalClose={() => setShowModal(!showModal)}
            leftButtonHandler={() => setShowModal(!showModal)}
            rightButtonHandler={() => setShowModal(!showModal)}
          />
          <CustomModal
            showModal={showFull}
            handleModalClose={() => setShowFullsModal(false)}
            fullscreen
            headerHeading='Modal'
          >
            <Text style={{ color: 'black' }}>This is full screen modal</Text>
          </CustomModal>
        </Stack>

        <Stack space={4} style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Toast</Text>
          <CustomButton
            value='Basic Toast'
            onPress={() => handleShowToast({
              title: 'This is basic taost',
              showToastAlert: false
            })}
          />
          <CustomButton
            value='Success Toast'
            onPress={() => handleShowToast({
              // title: 'Account verified',
              status: SNACKBAR_TYPE.success,
              description: 'Thanks for signing up with us.'
            })}
          />
          <CustomButton
            value='Error Toast'
            onPress={() => handleShowToast({
              // title: 'Invalid email address',
              status: SNACKBAR_TYPE.error,
              description: 'Please enter a valid email address',
              placement: SNACKBAR_PLACEMENT.top
            })}
          />
          <CustomButton
            value='warning Toast'
            onPress={() => handleShowToast({
              title: 'Something went wrong',
              status: SNACKBAR_TYPE.warning,
              description: 'Please enter a valid email address',
              placement: SNACKBAR_PLACEMENT.topLeft
            })}
          />
          <CustomButton
            value='info Toast(Solid variant)'
            onPress={() => handleShowToast({
              // title: 'Something went wrong',
              status: SNACKBAR_TYPE.info,
              description: 'Please enter a valid email address',
              placement: SNACKBAR_PLACEMENT.bottomLeft,
              variant: 'solid'
            })}
          />
        </Stack>

        <Stack space={4} style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Text</Text>
          <VStack space={1} alignItems='center'>
            <CustomText fontSize='xs'>xs</CustomText>
            <CustomText fontSize='sm'>sm</CustomText>
            <CustomText fontSize='md'>md</CustomText>
            <CustomText fontSize='lg'>lg</CustomText>
            <CustomText fontSize='xl'>xl</CustomText>
            <CustomText fontSize='2xl'>2xl</CustomText>
            <CustomText fontSize='3xl'>3xl</CustomText>
            <CustomText fontSize='4xl'>4xl</CustomText>
            <CustomText fontSize='5xl'>5xl</CustomText>
            <CustomText fontSize='6xl'>6xl</CustomText>
          </VStack>

          <VStack space={2} alignItems='center'>
            <CustomText bold>Bold</CustomText>
            <CustomText italic>Italic</CustomText>
            <CustomText underline>Underline</CustomText>
            <CustomText
              highlight _dark={{
                color: 'coolgray.800'
              }}
            >
              Highlighted
            </CustomText>
            <CustomText>
              H<CustomText sub>2</CustomText>O
            </CustomText>
            <CustomText underline>Underline</CustomText>
            <CustomText strikeThrough>StrikeThrough</CustomText>
            <CustomText bold italic underline>
              Bold, Italic & Underline
            </CustomText>
          </VStack>
        </Stack>

        <Stack space={4} style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Action Sheet</Text>
          <CustomButton
            value='Show Action Sheet '
            onPress={() => setShowActionSheet(true)}
          />

          <ActionSheet
            isOpen={showActionSheet}
            onClose={() => setShowActionSheet(false)}
            sheetList={sheetList}
          />

        </Stack>

        <Stack space={4} style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Switch</Text>
          <CustomSwitch
            isChecked={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
            size='sm'
          />
          <CustomSwitch
            isChecked={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
            size='md'
          />
          <CustomSwitch
            isChecked={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
            size='lg'
          />
          <CustomSwitch
            isChecked={isChecked}
            onToggle={() => setIsChecked(!isChecked)}
          />
        </Stack>

        <Stack space={4} style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>DatePicker</Text>
          <CustomDateTimeInputPicker
            label='ClockOut'
            setDateTimePickerValue={(value) => getAndSetDateTimePickerValue(value)}
            handleDateTimePicker={() => handleDateTimePicker()}
            isDateTimePickerVisible={isDateTimePickerVisible}
            placeholder={!date.toString().length ? 'HH:MM' : ''}
            value={date ? moment(date).format('HH:mm') : ''}
            error=''
            EndIcon={<UserIcon />}
            placeholderTextColor={StaticColors.grey5}
            backgroundColor={StaticColors.grey6}
            mode='time'
            handleCancel={handleDateTimePickerCancel}
          />
        </Stack>
        <Stack space={4} w='100%' mx='auto' mb='20px'>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>TextArea</Text>
          <CustomTextArea
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
          />
          <CustomTextArea
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
          />
          <CustomTextArea
            value={textValue}
            handleChange={(val) => setTextValue(val)}
            placeholder='Placeholder'
            type='password'
            error='This is a validation error'
          />
        </Stack>
        <Stack space={4} w='100%' mx='auto' mb='20px' alignSelf='center'>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Link</Text>
          <View>
            <CustomLink
              href='https://nativebase.io'
              style={{ width: '95%', height: 30, alignItems: 'center', justifyContent: 'center' }}
            >
              Link 1
            </CustomLink>
            <CustomLink
              href='https://nativebase.io'
              style={{ width: '95%', height: 30, alignItems: 'center', justifyContent: 'center' }}
            >
              <CustomText fontSize='md'>Link</CustomText>
            </CustomLink>
            <CustomLink
              style={{ width: '95%', height: 30, alignItems: 'center', justifyContent: 'center' }}
              href='https://nativebase.io'
              _text={{
                fontSize: 'xl',
                _light: {
                  color: 'cyan.500'
                },
                color: 'cyan.300'
              }}
              isUnderlined
              _hover={{
                _text: {
                  _light: {
                    color: 'cyan.600'
                  },
                  color: 'cyan.400'
                }
              }}
            >
              Click here to open documentation.
            </CustomLink>
          </View>
        </Stack>
        <Stack space={4} w='100%' mx='auto' mb='20px' alignItems='center'>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Error Boundary</Text>
          <CustomButton
            value='Generate Error'
            onPress={() => setIsErrorComponentVisible(true)}
          />
          {isErrorComponentVisible && <ComponentWithError />}
        </Stack>

        <Stack space={4} w='100%' mx='auto' mb='20px' alignItems='center'>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>ListItem</Text>
          <View style={{
            alignItems: 'center',
            width: '100%'
          }}
          >
            {
              myProfileList.map((item) => {
                return (
                  <ListItem
                    key={item.id}
                    onPress={() => item.onPress()}
                    title={item.label}
                    description={item.description}
                    leftIcon={item.icon}
                    style={{
                      marginTop: 10
                    }}
                  />
                )
              })
            }
          </View>
        </Stack>

        <Stack space={4} w='100%' mx='auto' mb='20px' alignItems='center'>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>List Accordian</Text>
          <View style={{
            alignItems: 'center',
            width: '100%'
          }}
          >
            <ListAccordian
              title='Home Address'
              style={{
                marginTop: 10
              }}
              listItems={basicInformationList}
              expanded={expandAccordian}
              onPress={() => setExpandAccordian(!expandAccordian)}
            />
          </View>
        </Stack>

        <Stack space={4} style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: '800', alignSelf: 'center', marginBottom: 20, fontSize: 24 }}>Show Multi Select Pop Up</Text>
          <CustomButton
            value='Show Multi Select'
            onPress={() => setShowMultiSelect(true)}
          />
          <SelectFullScreenPopUp
            showModal={showMultiSelect}
            handleModalClose={() => setShowMultiSelect(false)}
            headerHeading='Select Subjects'
            list={subjectList}
            isChecked={isCheckedHandler}
            handleItemSelect={handleItemSelect}
            keyProp='label'
            search
            searchHandler={() => {}}
            t={t}
            rightText='Cancel All'
            onRightPress={() => {
              setSelected([])
              setShowMultiSelect(false)
            }}
          />
        </Stack>
      </ScrollContainer>
    </View>

  )
}

export default UiKitDemo
