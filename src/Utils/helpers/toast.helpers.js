import React from 'react'
import ToastAlert from '@/Components/UI-Kit/ToastAlert'
import { SNACKBAR_PLACEMENT, SNACKBAR_TYPE } from '../constants'
import { Toast } from 'native-base'

const handleCloseToast = (id) => {
  Toast.close(id)
}

export const handleShowToast = ({
  title = '',
  status = SNACKBAR_TYPE.info,
  variant = 'left-accent',
  description,
  isClosable = true,
  placement = SNACKBAR_PLACEMENT.bottom,
  showToastAlert = true
}) => {
  Toast.show({
    placement,
    title,
    ...(showToastAlert && {
      render: ({
        id
      }) => {
        return (
          <ToastAlert
            id={id}
            title={title}
            status={status}
            variant={variant}
            description={description}
            closeToast={handleCloseToast}
            isClosable={isClosable}
          />
        )
      }
    })

  })
}
