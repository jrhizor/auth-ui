import { ViewsMap } from './types'

export const VIEWS: ViewsMap = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  FORGOTTEN_PASSWORD: 'forgotten_password',
  MAGIC_LINK: 'magic_link',
  PHONE_OTP: 'phone_otp',
  UPDATE_PASSWORD: 'update_password',
  VERIFY_OTP: 'verify_otp',
}

export const PREPENDED_CLASS_NAMES = 'supabase-auth-ui'

/**
 * CSS class names
 * used for generating prepended classes
 */
export const CLASS_NAMES = {
  // interfaces
  ROOT: 'root',
  SIGN_IN: VIEWS.SIGN_IN,
  SIGN_UP: VIEWS.SIGN_UP,
  FORGOTTEN_PASSWORD: VIEWS.FORGOTTEN_PASSWORD,
  MAGIC_LINK: VIEWS.MAGIC_LINK,
  PHONE_OTP: VIEWS.PHONE_OTP,
  UPDATE_PASSWORD: VIEWS.UPDATE_PASSWORD,
  // ui
  anchor: 'ui-anchor',
  button: 'ui-button',
  container: 'ui-container',
  divider: 'ui-divider',
  input: 'ui-input',
  label: 'ui-label',
  loader: 'ui-loader',
  message: 'ui-message',
}
