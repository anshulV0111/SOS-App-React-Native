import StaticColors from '@/Theme/static-colors'

export const Colors = {
  inputBackground: StaticColors.grey800,
  circleButtonBackground: StaticColors.darkPurple,

  primaryColor: StaticColors.darkPurple,
  primaryText: StaticColors.white,
  primaryButton: StaticColors.lightBlue,
  secondaryText: StaticColors.white,
  primaryButtonOnPress: StaticColors.purple,

  ...StaticColors
}

export const NavigationColors = {
  primary: Colors.primaryColor,
  background: StaticColors.darkPurple,
  card: StaticColors.darkPurple
}
export default {
  Colors,
  NavigationColors
}
