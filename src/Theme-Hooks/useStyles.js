import { useTheme } from 'native-base'

const useStyles = ({ styles: stylesFile }) => {
  const { colors } = useTheme()
  const getStyles = stylesFile({ Colors: colors })

  return {
    getStyles
  }
}
export default useStyles
