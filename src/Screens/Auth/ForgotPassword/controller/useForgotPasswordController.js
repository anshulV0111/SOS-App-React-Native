import { navigate } from '@/Navigators/utils'
import { SCREEN_NAMES, SNACKBAR_TYPE } from '@/Utils/constants'
import { handleShowToast } from '@/Utils/helpers/toast.helpers'

const useForgotPasswordController = () => {
  const handleForgotPasswordSubmit = () => {
    handleShowToast({
      status: SNACKBAR_TYPE.success,
      description: 'Please check your email!'
    })
    navigate(SCREEN_NAMES.login)
  }

  const handleSignInClick = () => {
    navigate(SCREEN_NAMES.login)
  }

  return {
    handleForgotPasswordSubmit,
    handleSignInClick
  }
}

export default useForgotPasswordController
