import React from 'react'
import { Alert, CloseIcon, HStack, IconButton, Text, VStack } from 'native-base'
import { SNACKBAR_TYPE } from '@/Utils/constants'
import { useTranslation } from 'react-i18next'

const ToastAlert = ({
  variant,
  isClosable,
  title,
  closeToast,
  description,
  status,
  id,
  ...rest
}) => {
  const { t } = useTranslation()
  return (
    <Alert maxWidth='100%' alignSelf='center' flexDirection='row' status={status} variant={variant} {...rest}>
      <VStack space={1} flexShrink={1} w='100%'>
        <HStack flexShrink={1} alignItems='center' justifyContent='space-between'>
          <HStack space={2} flexShrink={1} alignItems='center'>
            <Alert.Icon />
            <Text fontSize='md' fontWeight='medium' flexShrink={1} color={variant === 'solid' ? 'lightText' : variant !== 'outline' ? 'darkText' : null}>
              {title || t(status)}
            </Text>
          </HStack>
          {isClosable
            ? <IconButton
                variant='unstyled' icon={<CloseIcon size='3' />} _icon={{
                  color: variant === 'solid' ? 'lightText' : 'darkText'
                }} onPress={() => closeToast(id)}
              />
            : null}
        </HStack>

        {
        description
          ? (
            <Text px='6' color={variant === 'solid' ? 'lightText' : variant !== 'outline' ? 'darkText' : null}>
              {description}
            </Text>
            )
          : <></>
        }
      </VStack>
    </Alert>
  )
}

export default ToastAlert

ToastAlert.defaultProps = {
  variant: 'left-accent',
  isClosable: true,
  title: '',
  closeToast: () => { },
  description: '',
  status: SNACKBAR_TYPE.info
}
