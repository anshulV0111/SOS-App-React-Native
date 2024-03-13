/* ==========================================================================
  Auth Token constant
========================================================================== */
export const AUTH_TOKEN = 'authToken'
export const REFRESH_TOKEN = 'refreshToken'

/* ==========================================================================
  Screen Names
========================================================================== */
export const SCREEN_NAMES = {
  home: 'Home',
  login: 'Login',
  forgotPassword: 'Forgot Password',
  profile: 'Profile',
  comingSoon: 'Coming Soon',
  help: 'Help',
  faq: 'FAQ',
  reports: 'Reports',
  contactUs: 'Contact Us',
  uiKit: 'UI Kit Demo'
}

/* ==========================================================================
  HTTP Method Types
========================================================================== */
export const METHOD_TYPES = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch'
}

/* ==========================================================================
  SNACKBAR types
========================================================================== */
export const SNACKBAR_TYPE = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
}

export const SNACKBAR_PLACEMENT = {
  bottom: 'bottom',
  top: 'top',
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right'
}

/* ==========================================================================
  Loader Overlay Area
========================================================================== */
export const LOADER_HANDLER_TYPES = {
  screen: 'screenLoader',
  appLoader: 'appLoader'
}

/* ==========================================================================
  Regex
========================================================================== */
export const PHONE_REG_EXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const ONLY_CHAR_REG = /^[aA-zZ\s]+$/
