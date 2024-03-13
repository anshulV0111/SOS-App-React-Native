import React from 'react'
import { Box, Center, Heading, VStack } from 'native-base'
import useLoginController from './controller/useLoginController'
import TextInput from '@/Components/UI-Kit/TextInput'
import CustomLink from '@/Components/UI-Kit/CustomLink'
import CustomButton from '@/Components/UI-Kit/CustomButton'

const LoginScreen = () => {
  const {
    handleForgotPasswordClick, handleSubmit,
    values, handleChange, errors, touched
  } = useLoginController()

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
          Sign in to continue!
        </Heading>

        <VStack space={3} mt='5'>
          <TextInput
            w='100%'
            formLabel='Email ID'
            value={values.email}
            placeholder='Enter your email'
            handleChange={handleChange('email')}
            error={touched.email && errors.email}
          />

          <TextInput
            w='100%'
            type='password'
            formLabel='Password'
            value={values.password}
            placeholder='Enter Password'
            handleChange={handleChange('password')}
            error={touched.password && errors.password}
          />
          <CustomLink
            onPress={handleForgotPasswordClick}
            alignSelf='flex-end'
            mt='1'
          >
            Forget Password?
          </CustomLink>

          <CustomButton
            w='100%'
            value='Sign in'
            onPress={handleSubmit}
          />
        </VStack>
      </Box>
    </Center>
  )
}

export default LoginScreen
