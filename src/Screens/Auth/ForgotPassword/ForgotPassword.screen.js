import React from 'react'
import { Box, Center, FormControl, Heading, VStack } from 'native-base'
import useForgotPasswordController from './controller/useForgotPasswordController'
import TextInput from '@/Components/UI-Kit/TextInput'
import CustomLink from '@/Components/UI-Kit/CustomLink'
import CustomButton from '@/Components/UI-Kit/CustomButton'

const ForgotPasswordScreen = () => {
  const { handleForgotPasswordSubmit, handleSignInClick } = useForgotPasswordController()

  return (
    <Center w='100%'>
      <Box safeArea p='2' py='8' w='90%' maxW='290'>
        <Heading
          size='lg' fontWeight='600' color='coolGray.800' _dark={{
            color: 'warmGray.50'
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt='1' _dark={{
            color: 'warmGray.200'
          }} color='coolGray.600' fontWeight='medium' size='xs'
        >
          To Reset Your Password, Please Enter Your Email ID
        </Heading>

        <VStack space={3} mt='5'>
          <FormControl>
            <TextInput
              placeholder='Enter Email'
              formLabel='Email ID'
              w='100%'
            />
            <CustomLink
              onPress={handleSignInClick}
              alignSelf='flex-end'
              mt='1'
            >
              Click to SignIn
            </CustomLink>
          </FormControl>

          <CustomButton
            w='100%'
            value=' Submit'
            onPress={handleForgotPasswordSubmit}
          />
        </VStack>
      </Box>
    </Center>
  )
}

export default ForgotPasswordScreen
