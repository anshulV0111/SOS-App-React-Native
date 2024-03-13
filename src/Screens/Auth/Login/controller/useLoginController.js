import { navigate } from '@/Navigators/utils'
import { setAuthToken, setRefreshToken, setUser } from '@/Store/redux/Auth/Auth.slice'
import { SCREEN_NAMES } from '@/Utils/constants'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

const useLoginController = () => {
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const handleLoginSubmit = () => {
    dispatch(setUser({
      name: 'dummy'
    }))
    dispatch(setAuthToken('test'))
    dispatch(setRefreshToken('test'))
  }

  const handleForgotPasswordClick = () => {
    navigate(SCREEN_NAMES.forgotPassword)
  }

  const loginFormSchema = yup.object({
    email: yup
      .string()
      .label(t('email'))
      .email(t('invalidEmailFormat'))
      .required((props) => t('isRequired', props)),
    password: yup
      .string()
      .label(t('password'))
      .min(6, (props) =>
        t('mustbeAtleastCharacters', { ...props, minNumber: 6 })
      )
      .max(32, (props) =>
        t('cannotExceedCharacters', { ...props, maxNumber: 32 })
      )
      .required((props) => t('isRequired', props))

  })

  const { handleSubmit, values, handleChange, errors, resetForm, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: loginFormSchema,
    onSubmit: async (values) => {
      console.log('Login Form Submit ===== ', values)
      handleLoginSubmit()
      resetForm()
    }
  })

  return {
    handleForgotPasswordClick,
    handleSubmit,
    values,
    handleChange,
    errors,
    touched
  }
}

export default useLoginController
