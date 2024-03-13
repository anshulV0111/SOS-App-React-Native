/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */
/**
 * Colors
 */
import StaticColors from './static-colors'

const Colors = {
  inputBackground: StaticColors.white,
  circleButtonBackground: StaticColors.gray500,
  circleButtonColor: StaticColors.purple,

  primaryColor: StaticColors.red,
  primaryText: StaticColors.white,
  secondaryText: StaticColors.black,
  primaryButton: StaticColors.purple,
  primaryButtonOnPress: StaticColors.gray500,

  ...StaticColors
}

export const NavigationColors = {
  primary: Colors.white,
  background: StaticColors.red,
  card: StaticColors.white
}
/**
 * FontSize
 */
export const FontSize = {
  tiny: 14,
  small: 16,
  regular: 20,
  large: 40
}
/**
 * Metrics Sizes
 */
const tiny = 10
const small = tiny * 2 // 20
const regular = tiny * 3 // 30
const large = regular * 2 // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large
}
export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes
}
