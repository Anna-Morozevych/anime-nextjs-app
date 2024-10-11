import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

//  Add color mode config
const config: ThemeConfig  = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// extend the theme
const theme = extendTheme({
  ...config
})

export default theme